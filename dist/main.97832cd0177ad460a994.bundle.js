(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{E:()=>h});class t{constructor(e,t,o,r){this.lat=e,this.long=t,this.city=o,this.airQuality=r}}let o=["Air quality is considered satisfactory, and air pollution poses little or no risk",""],r=["Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.","Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."],a=["Members of sensitive groups may experience health effects. The general public is not likely to be affected.","Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."],i=["Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects","Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"],n=["Health warnings of emergency conditions. The entire population is more likely to be affected.","Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion."],s=["Health alert: everyone may experience more serious health effects","Everyone should avoid all outdoor exertion"],c=L.map("mapid").setView([0,0],8),l=L.marker([0,0]).addTo(c);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFya2ttaXQiLCJhIjoiY2tyZXh5bDdsMGZjMTJucW43ejZ5ZmR3bCJ9.boPWZsHWn4LUc1p3M8E1RA",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"your.mapbox.access.token"}).addTo(c);let d=document.querySelector(".search");function u(e){e.preventDefault(),p(`https://api.waqi.info/feed/${d.value}/?token=${h}`)}async function p(e){!function(){let e=document.querySelector(".searching"),t=document.querySelector(".map-container"),o=document.querySelector(".data-container");e.classList.add("show"),t.classList.add("opacity"),o.classList.add("opacity")}();try{const d=await fetch(e),u=await d.json();let p=new t(u.data.city.geo[0],u.data.city.geo[1],u.data.city.name,u.data.aqi);await function(e,t,d,u){document.querySelector(".city-name").textContent=`${d}`,document.querySelector(".latlong").textContent=`Latitude: ${e.toFixed(2)} Longitude: ${t.toFixed(2)}`,document.querySelector(".air-quality").textContent=`${u}`,c.flyTo([e,t]),l.setLatLng([e,t]);let p=document.querySelector(".data-container"),h=document.querySelector(".information");0<=u&&u<=50&&(p.style.background="#6bd160",h.innerHTML=`<h3>Good</h3><br><p>${o[0]}</p><br><p>${o[1]}</p>`,h.style.background="#6bd160"),51<=u&&u<=100&&(p.style.background="#fcfa5b",h.innerHTML=`<h3>Moderate</h3><br><p>${r[0]}</p><br><p>${r[1]}</p>`,h.style.background="#fcfa5b"),101<=u&&u<=150&&(p.style.background="#ffb14a",h.innerHTML=`<h3>Unhealty for sensitive groups</h3><br><p>${a[0]}</p><br><p>${a[1]}</p>`,h.style.background="#ffb14a"),151<=u&&u<=200&&(p.style.background="#ff1212",p.color="white",h.innerHTML=`<h3>Unhealty</h3><br><p>${i[0]}</p><br><p>${i[1]}</p>`,h.style.background="#ff1212",h.color="white"),201<=u&&u<=300&&(p.style.background="#c800ff",p.color="white",h.innerHTML=`<h3>Very unhealty</h3><br><p>${n[0]}</p><br><p>${n[1]}</p>`,h.style.background="#c800ff",h.color="white"),u>300&&(p.style.background="#a82d00",p.color="white",h.innerHTML=`<h3>Hazardous</h3><br><p>${s[0]}</p><br><p>${s[1]}</p>;`,h.style.background="#a82d00",h.color="white")}(p.lat,p.long,p.city,p.airQuality)}catch{let e=document.querySelector(".error");e.classList.add("show-error");let t=document.querySelector(".search");e.querySelector(".error-btn").addEventListener("click",(o=>{e.classList.remove("show-error"),t.value=""}))}finally{!function(){let e=document.querySelector(".searching"),t=document.querySelector(".map-container"),o=document.querySelector(".data-container");e.classList.remove("show"),t.classList.remove("opacity"),o.classList.remove("opacity")}()}}document.querySelector(".btn-search").addEventListener("click",u),d.addEventListener("keyup",(e=>{"Enter"===e.key&&u(e)}));const h="07ea414469bb0aff8dac07f1fa02a5a735bdbed3";window.addEventListener("load",(()=>{let e=document.querySelector("#current-location");navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){let o=t.coords.latitude,r=t.coords.longitude;e.innerHTML=`<h2>Your current location<br>Latitude: ${o.toFixed(2)}<br> Longitude: ${r.toFixed(2)}</h2>`,p(`https://api.waqi.info/feed/geo:${o};${r}/?token=${h}`)}),(function(){e.innerHTML="",p(`https://api.waqi.info/feed/beijing/?token=${h}`)}))}))})();