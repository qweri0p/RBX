const d=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const y of t)if(y.type==="childList")for(const g of y.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&e(g)}).observe(document,{childList:!0,subtree:!0});function s(t){const y={};return t.integrity&&(y.integrity=t.integrity),t.referrerpolicy&&(y.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?y.credentials="include":t.crossorigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function e(t){if(t.ep)return;t.ep=!0;const y=s(t);fetch(t.href,y)}};d();const b=document.querySelector("#app");let o=["y","y","y","y","y","y","y","y","y"],f=["w","w","w","w","w","w","w","w","w"],l=["g","g","g","g","g","g","g","g","g"],u=["b","b","b","b","b","b","b","b","b"],i=["r","r","r","r","r","r","r","r","r"],r=["o","o","o","o","o","o","o","o","o"],a=[o,f,l,u,i,r];function p(){let n="";for(let c=0;c<6;c++)for(let s=0;s<9;s++)n+=a[c][s];return n}function w(){const n=o.slice(),c=f.slice(),s=l.slice(),e=u.slice(),t=i.slice();o[0]=e[0],o[3]=e[3],o[6]=e[6],u[0]=c[0],u[3]=c[3],u[6]=c[6],f[0]=s[8],f[3]=s[5],f[6]=s[2],l[8]=n[0],l[5]=n[3],l[2]=n[6],i[0]=t[6],i[1]=t[3],i[2]=t[0],i[3]=t[7],i[5]=t[1],i[6]=t[8],i[7]=t[5],i[8]=t[2]}function m(){const n=o.slice(),c=f.slice(),s=l.slice(),e=u.slice(),t=i.slice();o[0]=s[8],o[3]=s[5],o[6]=s[2],u[0]=n[0],u[3]=n[3],u[6]=n[6],f[0]=e[0],f[3]=e[3],f[6]=e[6],l[8]=c[0],l[5]=c[3],l[2]=c[6],i[0]=t[2],i[1]=t[5],i[2]=t[8],i[3]=t[1],i[5]=t[7],i[6]=t[0],i[7]=t[3],i[8]=t[6]}function h(){const n=o.slice(),c=f.slice(),s=l.slice(),e=u.slice(),t=r.slice();o[2]=s[6],o[5]=s[3],o[8]=s[0],u[2]=n[2],u[5]=n[5],u[8]=n[8],f[2]=e[2],f[5]=e[5],f[8]=e[8],l[6]=c[2],l[3]=c[5],l[0]=c[8],r[0]=t[6],r[1]=t[3],r[2]=t[0],r[3]=t[7],r[5]=t[1],r[6]=t[8],r[7]=t[5],r[8]=t[2]}function L(){const n=o.slice(),c=f.slice(),s=l.slice(),e=u.slice(),t=r.slice();o[2]=e[2],o[5]=e[5],o[8]=e[8],u[2]=c[2],u[5]=c[5],u[8]=c[8],f[2]=s[6],f[5]=s[3],f[8]=s[0],l[6]=n[2],l[3]=n[5],l[0]=n[8],r[0]=t[2],r[1]=t[5],r[2]=t[8],r[3]=t[1],r[5]=t[7],r[6]=t[0],r[7]=t[3],r[8]=t[6]}function O(){const n=r.slice(),c=u.slice(),s=i.slice(),e=o.slice(),t=l.slice();u[6]=s[6],u[7]=s[7],u[8]=s[8],i[6]=t[6],i[7]=t[7],i[8]=t[8],l[6]=n[6],l[7]=n[7],l[8]=n[8],r[6]=c[6],r[7]=c[7],r[8]=c[8],o[0]=e[6],o[1]=e[3],o[2]=e[0],o[3]=e[7],o[5]=e[1],o[6]=e[8],o[7]=e[5],o[8]=e[2]}function v(){const n=r.slice(),c=u.slice(),s=i.slice(),e=o.slice(),t=l.slice();u[6]=n[6],u[7]=n[7],u[8]=n[8],i[6]=c[6],i[7]=c[7],i[8]=c[8],l[6]=s[6],l[7]=s[7],l[8]=s[8],r[6]=t[6],r[7]=t[7],r[8]=t[8],o[0]=e[2],o[1]=e[5],o[2]=e[8],o[3]=e[1],o[5]=e[7],o[6]=e[0],o[7]=e[3],o[8]=e[6]}w();m();h();L();O();v();b.innerHTML=p();
