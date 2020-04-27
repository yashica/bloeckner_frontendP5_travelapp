var Client=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=async function(){const t=await fetch("/all");try{const e=await t.json();document.getElementById("result_image").innerHTML=`<figure id="cityimage"><img src="${e.imageurl}" alt="A picture of ${e.city}" ><figcaption>${e.city}</figcaption></figure>`,document.getElementById("result_text").innerHTML=`\n        <h3>Your Trip to ${e.city}</h3>\n        <p>Your trip to ${e.city} will start in ${e.timeLeft} days.</p>\n        <p>You will stay in ${e.city} for ${e.duration} days.</p>\n        </br>\n        <h3>Weather forecast for the day of arrival</h3>\n        <p>Temperature in ${e.city}: ${e.temperature}°C.</p>\n        <p>Weather: ${e.summary}</p>\n        `}catch(t){console.log("error",t)}}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);const i=document.getElementById("submit"),a=document.getElementById("dateInput_start"),u=document.getElementById("dateInput_back"),c=document.getElementById("cityInput"),l=new Date,s=(l.getMonth()+1<10?"0":"")+(l.getMonth()+1),f=`${l.getFullYear()}-${s}-${l.getDate()}`;console.log("Today's date = "+f),a.value=f,u.value=f,i.addEventListener("click",(async function(){const t=new Date(a.value).getTime()/1e3,e=new Date(u.value).getTime()/1e3,n=Math.round((new Date).getTime()/1e3),r=parseInt((t-n)/86400),i=parseInt((e-t)/86400),l=c.value||"Munich";d("/postData",{departtime:t,city:l,timeLeft:r,duration:i}).then(t=>o()())}));const d=async(t="",e={})=>{const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return await n.json()}catch(t){console.log("error in postRequest ",t)}};n(1),n(2),n(3),n(4)}]);