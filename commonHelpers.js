import{S as h,i as m}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(o){const n="44394014-4230f595acf8cb42e98735a97",s="https://pixabay.com",a="/api/",e=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}),r=`${s}${a}?${e}`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()}).then(t=>{if(t.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.hits}).catch(t=>{throw console.error("Error fetching the images:",t),t})}let i;function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function b(o){const n=document.querySelector(".gallery"),s=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:t,views:f,comments:y,downloads:d})=>`
            <div class="photo-card">
                <a href="${e}" class="gallery-link">
                    <img src="${a}" alt="${r}"/>
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${t}</p>
                    <p><b>Views:</b> ${f}</p>
                    <p><b>Comments:</b> ${y}</p>
                    <p><b>Downloads:</b> ${d}</p>
                </div>
            </div>
        `).join("");n.insertAdjacentHTML("beforeend",s),i&&i.destroy(),i=new h(".gallery a"),i.refresh()}function c(o){m.error({title:"Error",message:o,backgroundColor:"#ef4040",theme:"dark"})}const u=document.querySelector(".search-form"),l=document.querySelector(".loader"),q=u.querySelector('input[name="query"]');u.addEventListener("submit",o=>{o.preventDefault();const n=o.target.elements.query.value;if(n===""){c("Please enter a search query.");return}l.style.display="block",g(),p(n).then(s=>{l.style.display="none",s.length===0?c("Sorry, there are no images matching your search query. Please try again!"):b(s)}).catch(s=>{l.style.display="none",c(s.message)}),q.value=""});
//# sourceMappingURL=commonHelpers.js.map
