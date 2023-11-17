parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,a){return n(e)||r(e,a)||i(e,a)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}}function n(e){if(Array.isArray(e))return e}function a(e){return c(e)||l(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function l(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=document.querySelector("thead"),d=u.querySelector("tr"),f=document.querySelector("tbody"),p=f.rows,m=Array.from(p),v=null,y=null;function b(e){return parseFloat(e.replace(/[$,]/g,""))}function h(e){for(;f.firstChild;)f.removeChild(f.firstChild);e.forEach(function(e){f.appendChild(e)})}function g(e){v=y!==e?"asc":"asc"===v?"desc":"asc",y=e}u.addEventListener("click",function(e){for(var t=e.target,r=function(e){t===d.children[e]&&e>2&&(g(e),h(m.sort(function(t,r){var n=b(t.cells[e].innerText),a=b(r.cells[e].innerText);return"asc"===v?n-a:a-n}))),t===d.children[e]&&e<=2&&(g(e),h(m.sort(function(t,r){var n=t.cells[e].innerText.toLowerCase(),a=r.cells[e].innerText.toLowerCase();return"asc"===v?n.localeCompare(a):a.localeCompare(n)}))),m.forEach(function(e){return e.classList.remove("active")})},n=0;n<d.children.length;n++)r(n)}),f.addEventListener("click",function(e){var t=e.target;"TD"===t.tagName&&(m.forEach(function(e){return e.classList.remove("active")}),t.parentElement.classList.add("active")),m=Array.from(p)});var E=document.createElement("form");E.classList.add("new-employee-form"),E.innerHTML='<label>Name: <input name="name" type="text" data-qa="name"></label><label>Position: <input name="position" type="text" data-qa="position"></label><label>Office:<select name="office" data-qa="office"><option></option><option value="Tokyo">Tokyo</option><option value="Singapore">Singapore</option><option value="London">London</option><option value="New York">New York</option><option value="Edinburgh">Edinburgh</option><option value="San Francisco">San Francisco</option></select></label><label>Age: <input name="age" type="number" data-qa="age"></label><label>Salary: <input name="salary" type="number" data-qa="salary"></label><button>Save to table</button>',document.body.appendChild(E);var L=E.querySelectorAll("[data-qa]"),T=a(L);E.addEventListener("click",function(t){if(t.target===E.querySelector("button")){t.preventDefault();for(var r=f.insertRow(f),n={name:T[0].value,position:T[1].value,office:T[2].value,age:T[3].value,salary:T[4].value},a=0,o=Object.entries(n);a<o.length;a++){var i=e(o[a],2),l=i[0],c=i[1];if(!c.length)return void S("Error","Fill all lines","error");if("name"===l&&c.length<4)return void S("Name is too short","Name has to be at least 4 characters","error");if("age"===l&&(c<18||c>90))return void S("Wrong age","Age has to be between 18 and 60 years","error")}T.forEach(function(e){var t=r.insertCell();if("salary"===e.name){var n="$"+e.value.replace(/\B(?=(\d{3})+(?!\d))/g,",");t.innerText=n}else t.innerText=e.value}),S("Hooray!","New employee is successfully added to the table","success"),m=Array.from(p),E.reset()}});var S=function(e,t,r){var n=document.createElement("div");switch(n.classList.add("notification"),n.setAttribute("data-qa","notification"),r){case"success":n.classList.add("success");break;case"error":n.classList.add("error")}n.style.top="15px",n.style.right="15px";var a=document.createElement("h2");a.classList.add("title");var o=document.createElement("p");a.innerText=e,o.innerText=t,n.appendChild(a),n.appendChild(o),document.body.appendChild(n),setTimeout(function(){document.body.removeChild(n)},2e3)};f.addEventListener("dblclick",function(e){var t=e.target;if("TD"===t.tagName){var r=t.parentElement,n=t.innerText,a=document.createElement("INPUT"),o=function(){""===a.value.trim()?t.innerText=n:t.innerText=a.value,a.classList.contains("salary")&&(t.innerText="$"+a.value.replace(/\B(?=(\d{3})+(?!\d))/g,","))};t.innerText="",a.classList.add("cell-input"),a.value=n,t===r.children[3]&&a.setAttribute("type","number"),t===r.children[4]&&(a.value=Number(n.replace(/\D/g,"")),a.setAttribute("type","number"),a.classList.add("salary")),t.appendChild(a),a.focus(),a.addEventListener("blur",function(){o()}),a.addEventListener("keypress",function(e){"Enter"===e.key&&o()})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2564fc2c.js.map