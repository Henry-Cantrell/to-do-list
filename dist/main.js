!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=()=>{document.getElementById("createProjButton").addEventListener("click",()=>{h++;const e=m(document.getElementById("projNameField").value,document.getElementById("projNotesField").value,document.getElementById("projDueDate").value,document.getElementById("projDescField").value);e.id=h,""===e.projName&&""===e.notes&&""===e.dueDate&&""===e.description?window.alert("Please enter some project data!"):(E.push(e),d())})},d=()=>{const e=document.createElement("table"),t=document.createElement("div");t.id="tableDiv"+h,v.push(t),e.id=h;for(var n=0;n<E.length;n++)if(e.id==E[n].id){const o=document.createElement("row"),d=document.createElement("td"),c=document.createElement("td"),r=document.createElement("td"),i=document.createElement("td");d.textContent=E[n].projName,c.textContent=E[n].notes,r.textContent=E[n].dueDate,i.textContent=E[n].description,""!=E[n].projName&&o.appendChild(d),""!=E[n].notes&&o.appendChild(c),""!=E[n].dueDate&&o.appendChild(r),""!=E[n].description&&o.appendChild(i),e.appendChild(o);const a=document.getElementById("projMasterDiv");if(""===E[n].projName&&""===E[n].notes&&""===E[n].dueDate&&""===E[n].description)return!1;t.appendChild(e),a.appendChild(t),p(),l()}},l=()=>{const e=document.createElement("button");e.textContent="Delete this project",e.id="deleteButtonProj"+h;const t=document.getElementById("projMasterDiv"),n=document.getElementById("tableDiv"+h);c(e,t,n),n.appendChild(e)},c=(e,t,n)=>{e.addEventListener("click",()=>{t.removeChild(n)})},r=(e,t,n,o)=>{const d=document.createElement("button"),l=e;console.log(l),d.textContent="Save to-do list",i(d,l,t,n,o),e.appendChild(d)},i=(e,t,n,o,d)=>{e.addEventListener("click",()=>{C++;const l=s(document.getElementById("todoTitle"+h).value,document.getElementById("todoDueDate"+h).value,document.getElementById("todoNotes"+h).value);console.log(l);const c=document.createElement("table");c.id="todoTable"+C;const r=document.createElement("row"),i=document.createElement("td");i.textContent=l.todoTitle;const u=document.createElement("td");u.textContent=l.todoDueDate;const p=document.createElement("td");p.textContent=l.todoNotes,t.removeChild(n),t.removeChild(o),t.removeChild(d),t.removeChild(e),""!=i.textContent&&r.appendChild(i),""!=u.textContent&&r.appendChild(u),""!=p.textContent&&r.appendChild(p),c.appendChild(r),t.appendChild(c),a(c,t)})},a=(e,t)=>{const n=document.createElement("button");n.textContent="Delete this todo item",n.id="todoDeleteButton"+C,u(n,e,t),e.appendChild(n)},u=(e,t,n)=>{e.addEventListener("click",()=>{n.removeChild(t)})},p=()=>{const e=document.createElement("button");e.id="todoButton"+h,e.textContent="Add a to-do item";const t=document.getElementById("tableDiv"+h);((e,t)=>{e.addEventListener("click",()=>{const e=document.createElement("input");e.placeholder="What do you need to do?",e.id="todoTitle"+h;const n=document.createElement("input");n.placeholder="When is it due?",n.id="todoDueDate"+h;const o=document.createElement("input");o.placeholder="Add any notes that you like",o.id="todoNotes"+h;const d=e,l=n,c=o;t.appendChild(e),t.appendChild(n),t.appendChild(o),r(t,d,l,c)})})(e,t),t.appendChild(e)},m=(e,t,n,o)=>({projName:e,notes:t,dueDate:n,description:o}),s=(e,t,n)=>({todoTitle:e,todoDueDate:t,todoNotes:n}),h=0,C=0,E=[],v=[];(()=>{const e=document.createElement("div");e.id="formdiv";const t=document.createElement("input");t.placeholder="Name of project",t.id="projNameField",t.type="text";const n=document.createElement("input");n.placeholder="Your notes go here",n.id="projNotesField",n.type="text";const d=document.createElement("input");d.placeholder="mm/dd/yy",d.id="projDueDate",d.type="text";const l=document.createElement("input");l.placeholder="Description of project",l.id="projDescField",l.type="text";const c=document.createElement("button");c.textContent="Make a project",c.id="createProjButton",e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(l),e.appendChild(c);document.getElementById("contentDiv").appendChild(e),o()})()}]);