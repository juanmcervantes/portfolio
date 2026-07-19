import "@fontsource/vt323";
import "@fontsource/luckiest-guy";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/wm.css";
import "./styles/sections.css";

import { initWM } from "./wm";
import { initI18n, type Lang } from "./i18n";

document.documentElement.classList.remove("nojs");

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel);
const MOBILE = window.matchMedia("(max-width: 900px)");
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ————— boot screen (once per tab session) ————— */
const boot = $("#boot")!;
if (sessionStorage.getItem("paperos-booted")) {
  boot.classList.add("boot--done");
} else {
  setTimeout(() => {
    boot.classList.add("boot--done");
    sessionStorage.setItem("paperos-booted", "1");
  }, 1100);
}

/* ————— windows ————— */
const wm = initWM();

document.querySelectorAll<HTMLElement>("[data-open-window]").forEach((btn) => {
  btn.addEventListener("click", () => {
    wm.open(btn.dataset.openWindow!);
    btn.closest("details")?.removeAttribute("open");
  });
});

$("#restore-all")?.addEventListener("click", () => {
  wm.restoreAll();
  $("#restore-all")?.closest("details")?.removeAttribute("open");
});

// only one menu open at a time; click-away closes
document.addEventListener("click", (e) => {
  const inside = (e.target as HTMLElement).closest("details.menu");
  document.querySelectorAll("details.menu[open]").forEach((d) => {
    if (d !== inside) d.removeAttribute("open");
  });
});

/* ————— i18n ————— */
const i18n = initI18n();
document.querySelectorAll<HTMLElement>("#lang-menu [data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    i18n.set(btn.dataset.lang as Lang);
    btn.closest("details")?.removeAttribute("open");
  });
});

/* ————— Guadalajara clock ————— */
const clock = $("#clock");
const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "America/Mexico_City",
});
const tick = () => {
  if (clock) clock.textContent = `GDL ${fmt.format(new Date())}`;
};
tick();
setInterval(tick, 15_000);

/* ————— cookie parody ————— */
const cookieNote = $("#cookie-note")!;
if (!localStorage.getItem("paperos-cookie")) {
  setTimeout(() => (cookieNote.hidden = false), 2_500);
}
$("#cookie-ok")?.addEventListener("click", () => {
  cookieNote.hidden = true;
  localStorage.setItem("paperos-cookie", "1");
});

/* ————— the 1,000,000th visitor ————— */
if (!localStorage.getItem("paperos-prize")) {
  setTimeout(() => {
    if (MOBILE.matches) return; // check at fire time: the pane may resize after load
    wm.open("win-prize");
    localStorage.setItem("paperos-prize", "1");
  }, 22_000);
}
$("#claim-prize")?.addEventListener("click", () => {
  $("#win-prize")?.removeAttribute("data-open");
  wm.open("win-contact");
});

/* ————— avatar: toon head ⇄ photo head (the celebrity treatment) ————— */
const applyAvatar = (mode: string) => {
  document
    .querySelectorAll<SVGUseElement>(".avatar-use")
    .forEach((u) => u.setAttribute("href", mode === "photo" ? "#avatar-photo" : "#avatar"));
};
let avatarMode = localStorage.getItem("paperos-avatar") ?? "toon";
applyAvatar(avatarMode);
$("#avatar-toggle")?.addEventListener("click", () => {
  avatarMode = avatarMode === "toon" ? "photo" : "toon";
  localStorage.setItem("paperos-avatar", avatarMode);
  applyAvatar(avatarMode);
});

/* ————— the market is always right ————— */
$("#bet-yes")?.addEventListener("click", () => {
  confetti();
  wm.open("win-contact");
});
const betNo = $("#bet-no");
betNo?.addEventListener("pointerenter", () => {
  // the NO position is not very liquid
  const x = Math.round(Math.random() * 60 - 30);
  const y = Math.round(Math.random() * 30 - 15);
  betNo.style.translate = `${x}px ${y}px`;
});
betNo?.addEventListener("click", () => {
  const q = document.querySelector<HTMLElement>(".market__q");
  if (q) q.textContent = "the market disagrees.";
});

/* ————— screensaver: bouncing paper head ————— */
const saver = $("#screensaver")!;
const head = saver.querySelector<SVGSVGElement>(".screensaver__head")!;
let idleTimer: number;
let rafId = 0;

const startSaver = () => {
  if (REDUCED.matches || MOBILE.matches || !saver.hidden) return;
  saver.hidden = false;
  let x = 40;
  let y = 40;
  let vx = 2.2;
  let vy = 1.7;
  const step = () => {
    const maxX = innerWidth - head.clientWidth;
    const maxY = innerHeight - head.clientHeight;
    x += vx;
    y += vy;
    if (x <= 0 || x >= maxX) vx *= -1;
    if (y <= 0 || y >= maxY) vy *= -1;
    head.style.transform = `translate(${clamp(x, 0, maxX)}px, ${clamp(y, 0, maxY)}px)`;
    rafId = requestAnimationFrame(step);
  };
  rafId = requestAnimationFrame(step);
};

const stopSaver = () => {
  if (!saver.hidden) {
    saver.hidden = true;
    cancelAnimationFrame(rafId);
  }
  clearTimeout(idleTimer);
  idleTimer = window.setTimeout(startSaver, 75_000);
};

["pointermove", "pointerdown", "keydown", "scroll"].forEach((ev) =>
  document.addEventListener(ev, stopSaver, { passive: true }),
);
stopSaver();

/* ————— konami: paper confetti ————— */
const KONAMI = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
let keys: string[] = [];
document.addEventListener("keydown", (e) => {
  keys = [...keys, e.key].slice(-10);
  if (keys.join(",") === KONAMI) confetti();
});

function confetti() {
  const colors = ["#e8483f", "#ffd23f", "#58b847", "#8fb4e8", "#c9a9ee", "#f2a65a"];
  for (let i = 0; i < 80; i++) {
    const bit = document.createElement("div");
    const size = 6 + Math.random() * 12;
    bit.style.cssText = `position:fixed;z-index:5000;pointer-events:none;top:-20px;left:${Math.random() * 100}vw;width:${size}px;height:${size * 1.4}px;background:${colors[i % colors.length]};border:2px solid #23201c;`;
    document.body.append(bit);
    bit
      .animate(
        [
          { transform: "translateY(0) rotate(0turn)" },
          { transform: `translateY(105vh) rotate(${1 + Math.random() * 2}turn)` },
        ],
        { duration: 2500 + Math.random() * 2500, easing: "ease-in", fill: "forwards" },
      )
      .finished.then(() => bit.remove());
  }
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
