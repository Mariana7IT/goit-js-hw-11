import{i as f,s as h}from"./assets/vendor-5c957d73.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="23963114-6d0d5d874ae460d9125bacd21",g="https://pixabay.com/api/";function y(n){const o=`${g}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`Error: ${e.statusText}`);return e.json()}).then(e=>e.hits).catch(e=>(console.log("Fetch error:",e),[]))}let l;document.querySelector(".container");const a=document.querySelector(".gallery"),u=document.getElementById("loader");function p(n){const o=n.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.webformatURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${e.largeImageURL}" 
          alt="${e.tags}" 
        />
      </a>
      <ul class='description'>
        <li><strong>Likes</strong> ${e.likes}</li>
        <li><strong>Views</strong> ${e.views}</li>
        <li><strong>Comments</strong> ${e.comments}</li>
        <li><strong>Downloads</strong> ${e.downloads}</li>
      </ul>
    </li>`).join("");a.innerHTML=o}function s(n){f.error({title:"Error",message:n})}function L(){a.innerHTML=""}function b(){u.style.display="block"}function w(){u.style.display="none"}function d(){l=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){l?l.refresh():d()}const q=document.querySelector(".form"),E=document.querySelector(".search-input");document.querySelector(".loader");q.addEventListener("submit",S);function S(n){n.preventDefault();const o=E.value.trim();if(!o){s("Please enter a search term");return}L(),b(),y(o).then(e=>{e.length===0?s("Sorry, there are no images matching your search query. Please try again!"):(p(e),d(),$())}).catch(e=>{s("An error occured while fetching images"),console.error(e)}).finally(()=>{w()})}
//# sourceMappingURL=commonHelpers.js.map
