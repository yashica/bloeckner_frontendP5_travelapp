var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=async function(){const e=await fetch("/all");try{const t=await e.json();document.getElementById("insertimage").innerHTML=`<figure id="imagesize"><img src="${t.imageurl}" alt="" ><figcaption>${t.city}</figcaption></figure>`,document.getElementById("insertword").innerHTML=`\n        <p>Your trip to ${t.city} will start in ${t.timeLeft} days</p>\n        <p>Your trip in ${t.city} are ${t.duration} days</p>\n        <p>The temperature in ${t.city} will be ${t.temperature}</p>\n        <h4>Weather Summary</h4>\n        <p>${t.summary}</p>\n        `}catch(e){console.log("error",e)}}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r);document.getElementById("submit").addEventListener("click",(async function(){const e=new Date(document.getElementById("myDate").value).getTime()/1e3,t=new Date(document.getElementById("backDate").value).getTime()/1e3,n=Math.round((new Date).getTime()/1e3),r=parseInt((e-n)/86400),a=parseInt((t-e)/86400),u=document.getElementById("myCity").value||"Munich";o("/postData",{departtime:e,currenttime:n,city:u,timeLeft:r,duration:a}).then(e=>i()())}));const o=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error in postRequest ",e)}};n(1),n(2),n(3),n(4)}]);