'use strict';
if(window.AOS) AOS.init({duration:650,once:true,offset:45,disable:window.matchMedia('(prefers-reduced-motion: reduce)').matches});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.querySelector('i').className=open?'bi bi-x':'bi bi-list'});
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.querySelector('i').className='bi bi-list'}
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.focus()}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('[data-category]').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter)}));
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{const s=document.querySelector('#service'),name=a.dataset.service;const option=Array.from(s.options).find(o=>o.value===name);s.value=option?name:(name.toLowerCase().includes('quotation')?'Equipment quotation':'School computer laboratories');if(!option)document.querySelector('#message').value='I would like to enquire about: '+name+'.\n'}));

const sections=document.querySelectorAll('main section[id]');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id))})},{rootMargin:'-15% 0px -60% 0px'});sections.forEach(s=>observer.observe(s));
