import{R as e,u as t,a as l,L as a,s as o}from"./index.d1eeae27.js";import{_ as r,I as n,a as c,n as u,T as i}from"./bucket-23.749de16c.js";import"./y.a65ca05f.js";var m,s,h=e.forwardRef((function(t,l){var a=t.children,o=r(t,["children"]);return e.createElement(n,c({width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:l},o),m||(m=e.createElement("path",{d:"M26 20L24 20 24 24 20 24 20 26 24 26 24 30 26 30 26 26 30 26 30 24 26 24z"})),s||(s=e.createElement("path",{d:"M28,8H16l-3.4-3.4C12.2,4.2,11.7,4,11.2,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h14v-2H4V6h7.2l3.4,3.4l0.6,0.6H28v8h2v-8\tC30,8.9,29.1,8,28,8z"})),a)}));export default()=>{const e=t();return l("section",{className:"início"},l("div",null,l("header",null,l("img",{src:"logo.png"})),l("form",null,l("input",{type:"color",defaultValue:localStorage.cor||"#1a73e9",onChange:e=>localStorage.cor=e.target.value}),l("input",{type:"text",placeholder:"Seu nome",defaultValue:localStorage.nome,onChange:e=>localStorage.nome=e.target.value}),l(a,{to:`/${u(11)}`},l("button",null,l(h,null)))),l("ul",null,e.map((e=>{const t=o(null);return l("li",{key:e.chave,ref:t},l(a,{to:`/${e.chave}`},e.título||"Sem título")," ",l(i,{onClick:()=>{e.remover(),t.current.remove()}}))})))))};
