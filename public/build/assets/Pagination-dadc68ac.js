import{o as t,c as s,F as r,E as l,g as c,j as o,n as u,ab as i,ad as d}from"./app-2745b5b5.js";const m={key:0,class:"flex justify-center mt-4 space-x-4"},x={__name:"Pagination",props:{data:{type:Object,default:()=>({})}},setup(a){return(f,h)=>a.data.links.length>3?(t(),s("div",m,[(t(!0),s(r,null,l(a.data.links,(e,n)=>(t(),o(i(d),{key:n,class:u(["px-4 py-3 text-sm leading-4 rounded hover:bg-white focus:text-blue-500 hover:shadow",{"bg-blue-400 text-white":e.active}]),href:e.url,innerHTML:e.label},null,8,["class","href","innerHTML"]))),128))])):c("",!0)}};export{x as default};