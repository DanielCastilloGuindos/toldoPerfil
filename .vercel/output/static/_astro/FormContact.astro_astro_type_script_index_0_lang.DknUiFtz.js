import{$ as t}from"./dom-selector.CC0qcKcF.js";const r=async()=>{try{await fetch("/api/analytics/track",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"contact_click",data:{source:"form"}})})}catch(e){console.error(e)}},l=async()=>{const e=t("#fullname")?.value,o=t("#email")?.value,n=t("#category")?.value,a=t("#description")?.value,c=`Hola, soy ${e}. 
Correo: ${o} 
Asunto: ${n} 

Mensaje: ${a}`,s=encodeURIComponent(c);r();const i=`https://wa.me/34628404370?text=${s}`;window.open(i,"_blank")},p=t('[type="submit"]');p?.addEventListener("click",l);
