/* Paper OS window manager: drag, stack, open/close/fold. ~150 lines, no deps. */

const MOBILE = window.matchMedia("(max-width: 900px)");

export interface WindowManager {
  open(id: string): void;
  restoreAll(): void;
}

export function initWM(): WindowManager {
  const windows = [...document.querySelectorAll<HTMLElement>(".window")];
  let zTop = 30;

  const bringToFront = (win: HTMLElement) => {
    zTop += 1;
    win.style.zIndex = String(zTop);
  };

  const open = (id: string) => {
    const win = document.getElementById(id);
    if (!win) return;
    win.setAttribute("data-open", "");
    win.removeAttribute("data-closed");
    win.removeAttribute("data-min");
    bringToFront(win);
    if (MOBILE.matches) win.scrollIntoView({ behavior: "smooth", block: "start" });
    win.querySelector<HTMLElement>(".window__btn")?.focus({ preventScroll: true });
  };

  const restoreAll = () => {
    for (const win of windows) {
      if (win.id === "win-prize") continue;
      win.setAttribute("data-open", "");
      win.removeAttribute("data-closed");
      win.removeAttribute("data-min");
    }
  };

  for (const win of windows) {
    win.addEventListener("pointerdown", () => bringToFront(win), { capture: true });

    win.addEventListener("click", (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-action]");
      if (!btn) return;
      if (btn.dataset.action === "close") {
        win.removeAttribute("data-open");
        win.setAttribute("data-closed", ""); // mobile shows windows by default; this hides them
      }
      if (btn.dataset.action === "minimize") win.toggleAttribute("data-min");
    });

    const bar = win.querySelector<HTMLElement>(".window__bar");
    if (bar) {
      enableDrag(win, bar);
      bar.addEventListener("dblclick", (e) => {
        if ((e.target as HTMLElement).closest(".window__btn")) return;
        win.toggleAttribute("data-min");
      });
    }
  }

  return { open, restoreAll };
}

function enableDrag(win: HTMLElement, bar: HTMLElement) {
  let startX = 0;
  let startY = 0;
  let baseLeft = 0;
  let baseTop = 0;

  const onMove = (e: PointerEvent) => {
    const desk = win.parentElement!.getBoundingClientRect();
    const left = clamp(baseLeft + e.clientX - startX, -win.offsetWidth * 0.6, desk.width - 48);
    const top = clamp(baseTop + e.clientY - startY, 0, desk.height - 40);
    win.style.left = `${left}px`;
    win.style.top = `${top}px`;
  };

  bar.addEventListener("pointerdown", (e) => {
    if (MOBILE.matches) return;
    if ((e.target as HTMLElement).closest(".window__btn")) return;
    startX = e.clientX;
    startY = e.clientY;
    baseLeft = win.offsetLeft;
    baseTop = win.offsetTop;
    win.classList.add("window--dragging");
    bar.setPointerCapture(e.pointerId);
    bar.addEventListener("pointermove", onMove);
    bar.addEventListener(
      "pointerup",
      () => {
        bar.removeEventListener("pointermove", onMove);
        win.classList.remove("window--dragging");
      },
      { once: true },
    );
  });
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
