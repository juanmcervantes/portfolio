/* Paper OS i18n.
   English is the source of truth, baked into index.html (good for SEO and no-JS).
   On boot we harvest it from the DOM, so switching back to EN needs no duplicate copy.
   Keys missing from a dictionary intentionally fall back to English (e.g. job titles). */

export type Lang = "en" | "es" | "pt";

const es: Record<string, string> = {
  "boot.sub": "recortando papel…",
  "menu.colophon": "acerca de este sitio…",
  "menu.restore": "restaurar ventanas",
  "menu.file": "archivo",
  "menu.cv": "abrir cv.pdf ↗",
  "menu.email": "enviar correo ↗",
  "icons.community": "comunidad/",
  "icons.cv": "no_es_virus.pdf",
  "about.tag": "ingeniero de software · 4× founder · Guadalajara, MX",
  "about.hint": "haz clic",
  "about.p1":
    "Construyo productos de punta a punta — código, operaciones y crecimiento. Hoy soy AI Operations & Growth Manager en Autopaquete, una plataforma logística rentable con 5,000+ usuarios en México y LATAM: lidero su transición a una operación AI-native y construyo la función de growth desde cero.",
  "about.p2":
    "En paralelo, estoy convirtiendo el negocio inmobiliario de mi familia (flipping de casas recuperadas por bancos) en una operación AI-native. Antes: cofundador y CEO de Docstay por 2.5 años, cofundador de Kontratista e Inmovating, y cofundador y director técnico de la primera Tech Week estatal de Jalisco. Shortlist de la Thiel Fellowship. Global Shaper del WEF.",
  "common.present": "presente",
  "dates.auto": "jun 2026 – presente",
  "exp.auto.sum":
    "Lidero la transición de una plataforma logística rentable hacia una operación AI-native y construyo la función de growth desde cero: agentes de IA y automatizaciones en operaciones, motores de crecimiento pagado y orgánico, y la infraestructura de datos que los conecta.",
  "exp.auto.c1": "5,000+ usuarios · MX y LATAM",
  "exp.auto.c2": "misión: ARR de $5M a $10M",
  "exp.ham.title": "Cofundador · Producto y Front-End",
  "dates.ham": "dic 2019 – presente",
  "exp.ham.sum":
    "Estudio de producto: rituales ágiles, PRDs y criterios de aceptación; llevo a los clientes de la idea al producto con descubrimiento, prototipado y lanzamientos por fases.",
  "exp.doc.title": "Cofundador y CEO",
  "exp.doc.sum":
    "«Airbnb de consultorios médicos». Lideré la arquitectura (React, Next.js, GraphQL en Google Cloud), un design system propio, pagos con Stripe Connect y agenda con Cal.com. Bootstrapped, sin presupuesto de marketing.",
  "exp.doc.c1": "60+ consultorios · 4 estados",
  "exp.doc.c2": "900+ horas reservadas",
  "exp.doc.c3": "+20% de ocupación",
  "exp.doc.c4": "3× ingresos de médicos",
  "exp.kon.title": "Cofundador y Product Manager",
  "exp.kon.sum":
    "Flujos obra ↔ oficina sobre herramientas que las cuadrillas ya conocían (Teams, Asana, APIs y pipelines automatizados), diseñados con 10 design partners en obra real.",
  "exp.inm.title": "Cofundador · PM · Front-End",
  "exp.inm.sum":
    "Plataforma digital de compra de inmuebles estilo Zillow. Serverless en Google Cloud, recortando costos $6k USD al año.",
  "exp.inm.c1": "$25k USD levantados",
  "proj.jtw":
    "Cofundé la primera tech week estatal de Jalisco y, como director técnico, lideré al equipo senior que construyó la plataforma — React/TypeScript/Astro sobre la API de Luma.",
  "proj.jtw.c1": "90+ eventos en 6 días",
  "proj.jtw.c2": "4,000+ asistentes",
  "proj.ccr.tag": "· side quest familiar",
  "proj.ccr":
    "Mi familia flipea casas recuperadas por bancos; yo estoy volviendo la operación AI-native — agentes que leen registros de propiedad, mapas de uso de suelo y avalúos. En producción. Aprobado por la familia.",
  "proj.doc":
    "El marketplace de consultorios — mi apuesta más larga y mejor maestra: 2.5 años como CEO, del primer commit a 60+ consultorios listados.",
  "proj.hes":
    "Delivery de comida por dieta para el campus, pretotipado en Swift (2019). Este papel ya está viejito y se nota.",
  "thiel.q": "MERCADO: ¿Juan construirá algo enorme?",
  "thiel.yes": "SÍ 94¢ ▲",
  "thiel.no": "NO 6¢ ▼",
  "thiel.caption": "un creador de mercado imparcial",
  "thiel.fact": "dato real: Thiel Fellowship — shortlist, generación 2024. Avancé dos rondas de selección.",
  "thiel.vol": "vol: $1,000,000 (dólares de cartulina)",
  "win.community": "comunidad/",
  "comm.wef":
    "Detectando talento joven y tejiendo colaboración entre el hub de Guadalajara y hubs de todo el mundo.",
  "comm.mv.title": "Fundador",
  "comm.mv":
    "Comunidad de 250+ founders técnicos que en conjunto han levantado $100M+, con alumni de YC y 500 Startups.",
  "stack.ai": "sistemas de agentes LLM · Claude API · MCP · automatización de flujos",
  "stack.comment":
    "# este sitio: Vite + TypeScript vanilla + CSS cortado a mano. cero frameworks, cero cookies.",
  "contact.lead": "salúdame — contesto rápido.",
  "contact.phone": "teléfono",
  "contact.loc": "ubicación",
  "contact.locv": "Guadalajara, MX · GMT-6",
  "win.colophon": "acerca_del_sitio.txt",
  "colo.p1":
    "Esto es Paper OS: un sistema operativo de escritorio recortado en cartulina. Inspirado por el sitio web de cierta banda neoyorquina y cierto pueblito montañés de Colorado.",
  "colo.p2":
    "Tipografías: VT323 y Luckiest Guy. Hecho con Vite + TypeScript vanilla — el window manager son ~150 líneas de TS escritas a mano. Sin framework de UI, sin framework de CSS, sin tracking.",
  "colo.recycled": "Todo el papel es reciclado.",
  "prize.big": "¡FELICIDADES!",
  "prize.body": "Eres el visitante 1,000,000 de este sitio.*",
  "prize.cta": "RECLAMAR PREMIO",
  "prize.fine": "*el número puede variar por 999,999.",
  "cookie.body": "este sitio usa cero cookies. ni cocina tenemos.",
  "saver.hint": "paper_saver.scr — mueve el mouse para despertar",
  "dates.doc": "jul 2021 – ene 2024",
  "dates.kon": "ene 2024 – jul 2024",
  "dates.inm": "sep 2020 – jun 2021",
};

const pt: Record<string, string> = {
  "boot.sub": "recortando papel…",
  "menu.colophon": "sobre este site…",
  "menu.restore": "restaurar janelas",
  "menu.file": "arquivo",
  "menu.cv": "abrir cv.pdf ↗",
  "menu.email": "enviar e-mail ↗",
  "icons.community": "comunidade/",
  "icons.cv": "nao_e_virus.pdf",
  "about.tag": "engenheiro de software · 4× founder · Guadalajara, MX",
  "about.hint": "clique aqui",
  "about.p1":
    "Construo produtos de ponta a ponta — código, operações e crescimento. Hoje sou AI Operations & Growth Manager na Autopaquete, uma plataforma logística rentável com 5.000+ usuários no México e na LATAM: lidero sua transição para uma operação AI-native e construo a função de growth do zero.",
  "about.p2":
    "Em paralelo, estou transformando o negócio imobiliário da minha família (revenda de casas retomadas por bancos) em uma operação AI-native. Antes: cofundador e CEO da Docstay por 2,5 anos, cofundador da Kontratista e da Inmovating, e cofundador e diretor técnico da primeira Tech Week estadual de Jalisco. Shortlist da Thiel Fellowship. Global Shaper do WEF.",
  "common.present": "presente",
  "dates.auto": "jun 2026 – presente",
  "exp.auto.sum":
    "Lidero a transição de uma plataforma logística rentável para uma operação AI-native e construo a função de growth do zero: agentes de IA e automações nas operações, motores de crescimento pago e orgânico, e a infraestrutura de dados que os conecta.",
  "exp.auto.c1": "5.000+ usuários · MX e LATAM",
  "exp.auto.c2": "missão: ARR de US$ 5M a US$ 10M",
  "exp.ham.title": "Cofundador · Produto e Front-End",
  "dates.ham": "dez 2019 – presente",
  "exp.ham.sum":
    "Estúdio de produto: rituais ágeis, PRDs e critérios de aceitação; levo clientes da ideia ao produto com discovery, prototipagem e lançamentos em fases.",
  "exp.doc.title": "Cofundador e CEO",
  "exp.doc.sum":
    "“Airbnb de consultórios médicos”. Liderei a arquitetura (React, Next.js, GraphQL no Google Cloud), um design system próprio, pagamentos com Stripe Connect e agenda com Cal.com. Bootstrapped, sem orçamento de marketing.",
  "exp.doc.c1": "60+ consultórios · 4 estados",
  "exp.doc.c2": "900+ horas reservadas",
  "exp.doc.c3": "+20% de ocupação",
  "exp.doc.c4": "3× renda dos médicos",
  "exp.kon.title": "Cofundador e Product Manager",
  "exp.kon.sum":
    "Fluxos obra ↔ escritório sobre ferramentas que as equipes já conheciam (Teams, Asana, APIs e pipelines automatizados), moldados com 10 design partners em obras reais.",
  "exp.inm.title": "Cofundador · PM · Front-End",
  "exp.inm.sum":
    "Plataforma digital de compra de imóveis estilo Zillow. Serverless no Google Cloud, cortando custos em US$ 6 mil/ano.",
  "exp.inm.c1": "US$ 25 mil captados",
  "proj.jtw":
    "Cofundei a primeira tech week estadual de Jalisco e, como diretor técnico, liderei o time sênior que construiu a plataforma — React/TypeScript/Astro sobre a API da Luma.",
  "proj.jtw.c1": "90+ eventos em 6 dias",
  "proj.jtw.c2": "4.000+ participantes",
  "proj.ccr.tag": "· side quest da família",
  "proj.ccr":
    "Minha família revende casas retomadas por bancos; estou tornando a operação AI-native — agentes que leem registros de imóveis, mapas de zoneamento e avaliações. Em produção. Aprovado pela família.",
  "proj.doc":
    "O marketplace de consultórios — minha aposta mais longa e melhor professora: 2,5 anos como CEO, do primeiro commit a 60+ consultórios listados.",
  "proj.hes":
    "Delivery de comida por dieta para o campus, pretotipado em Swift (2019). Este papel já está velhinho e dá pra notar.",
  "thiel.q": "MERCADO: o Juan vai construir algo enorme?",
  "thiel.yes": "SIM 94¢ ▲",
  "thiel.no": "NÃO 6¢ ▼",
  "thiel.caption": "um formador de mercado imparcial",
  "thiel.fact": "dado real: Thiel Fellowship — shortlist, turma de 2024. Avancei duas rodadas de seleção.",
  "thiel.vol": "vol: $1.000.000 (dólares de cartolina)",
  "win.community": "comunidade/",
  "comm.wef":
    "Garimpando talentos jovens e tecendo colaboração entre o hub de Guadalajara e hubs do mundo todo.",
  "comm.mv.title": "Fundador",
  "comm.mv":
    "Comunidade de 250+ founders técnicos que juntos já captaram US$ 100M+, com alumni de YC e 500 Startups.",
  "stack.ai": "sistemas de agentes LLM · Claude API · MCP · automação de fluxos",
  "stack.comment":
    "# este site: Vite + TypeScript vanilla + CSS cortado à mão. zero frameworks, zero cookies.",
  "contact.lead": "diga oi — respondo rápido.",
  "contact.phone": "telefone",
  "contact.loc": "localização",
  "contact.locv": "Guadalajara, MX · GMT-6",
  "win.colophon": "sobre_este_site.txt",
  "colo.p1":
    "Isto é o Paper OS: um sistema operacional recortado em cartolina. Inspirado no site de certa banda nova-iorquina e em certa cidadezinha nas montanhas do Colorado.",
  "colo.p2":
    "Tipografias: VT323 e Luckiest Guy. Feito com Vite + TypeScript vanilla — o gerenciador de janelas tem ~150 linhas de TS escritas à mão. Sem framework de UI, sem framework de CSS, sem tracking.",
  "colo.recycled": "Todo papel é reciclado.",
  "prize.big": "PARABÉNS!",
  "prize.body": "Você é o visitante nº 1.000.000 deste site.*",
  "prize.cta": "RESGATAR PRÊMIO",
  "prize.fine": "*o número pode variar em 999.999.",
  "cookie.body": "este site usa zero cookies. a gente nem cozinha tem.",
  "saver.hint": "paper_saver.scr — mexa o mouse para acordar",
  "dates.doc": "jul 2021 – jan 2024",
  "dates.kon": "jan 2024 – jul 2024",
  "dates.inm": "set 2020 – jun 2021",
};

const dicts: Record<Exclude<Lang, "en">, Record<string, string>> = { es, pt };
const HTML_LANG: Record<Lang, string> = { en: "en", es: "es", pt: "pt-BR" };

export function initI18n() {
  const nodes = [...document.querySelectorAll<HTMLElement>("[data-i18n]")];
  const english: Record<string, string> = {};
  for (const node of nodes) {
    const key = node.dataset.i18n!;
    if (!(key in english)) english[key] = node.textContent ?? "";
  }

  let current: Lang = "en";

  const set = (lang: Lang) => {
    current = lang;
    const dict = lang === "en" ? english : { ...english, ...dicts[lang] };
    for (const node of nodes) {
      node.textContent = dict[node.dataset.i18n!] ?? "";
    }
    document.documentElement.lang = HTML_LANG[lang];
    localStorage.setItem("paperos-lang", lang);
    document.querySelectorAll<HTMLElement>("#lang-menu [data-lang]").forEach((btn) => {
      btn.setAttribute("aria-current", String(btn.dataset.lang === lang));
    });
  };

  const fromUrl = new URLSearchParams(location.search).get("lang");
  const stored = localStorage.getItem("paperos-lang");
  const initial = ([fromUrl, stored].find((l) => l === "en" || l === "es" || l === "pt") ?? "en") as Lang;
  if (initial !== "en") set(initial);
  else set("en");

  return { set, current: () => current };
}
