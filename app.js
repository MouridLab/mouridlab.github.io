const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(focus=false){button?.setAttribute('aria-expanded','false');nav?.classList.remove('open');if(focus)button?.focus()}
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu(true)});
document.querySelector('#year').textContent=new Date().getFullYear();
