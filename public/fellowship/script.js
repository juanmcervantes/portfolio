
document.getElementById("year")?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
const menu=document.querySelector(".menu-toggle"),nav=document.getElementById("mobile-nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));nav.hidden=open});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.hidden=true;menu.setAttribute("aria-expanded","false")}))}
