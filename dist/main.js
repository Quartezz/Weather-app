(()=>{"use strict";const e={getData:async function(e){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=092ee1348dd5e84068aba00e5cf9264c`;try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`City ${e} not found`);return function(e){const{name:t,main:{temp:n,feels_like:i,humidity:a},wind:{speed:d}}=e;return{cityName:t,temperature:n,feelsLike:i,humidity:a,windSpeed:d}}(await n.json())}catch(e){return alert(e),null}}},t=e,n=function(e){if(!e)return;document.getElementById("searchResult").classList.add("active");const t=document.getElementById("cityName"),n=document.getElementById("temperature"),i=document.getElementById("feelsLike"),a=document.getElementById("humidity"),d=document.getElementById("wind");t.textContent=`${e.cityName}`,n.textContent=`${e.temperature} °C`,i.textContent=`Fells like: ${e.feelsLike} °C`,a.textContent=`Humidity: ${e.humidity} %`,d.textContent=`Wind: ${e.windSpeed} km/h`},i=document.getElementById("searchForm"),a=document.getElementById("searchInput"),d=document.getElementById("searchBtn");i.addEventListener("submit",(e=>{e.preventDefault()})),d.addEventListener("click",(async()=>{if(""===a.value)return;const e=await t.getData(a.value);n(e)}))})();