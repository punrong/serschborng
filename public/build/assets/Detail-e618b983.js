import{_ as x,d as c,r as a,o as r,c as l,b as d,w as p,F as y,e as t,t as o,g as h}from"./app-541770c2.js";const b={props:{user:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},methods:{edit(m){c.Inertia.get(route("user.edit",m))},goBack(){c.Inertia.visit(route("user.index"))}}},f={class:"mx-auto flex container items-center justify-center mt-4"},v={class:"rounded w-full p-2 bg-white"},w={class:"border-t border-gray-200 bg-white shadow sm:rounded-lg"},k=t("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"}," User Information "),t("p",{class:"mt-1 text-sm text-gray-600"}," Update user's name, email, status and role ")])],-1),B={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},C=t("dt",{class:"text-md font-medium text-gray-900"}," Name ",-1),j={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},F={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},I=t("dt",{class:"text-md font-medium text-gray-900"}," Email ",-1),N={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},S={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},E=t("dt",{class:"text-md font-medium text-gray-900"}," Status ",-1),U={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},V={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},D=t("dt",{class:"text-md font-medium text-gray-900"}," Role ",-1),H={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},K={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},M=t("dt",{class:"text-md font-medium text-gray-900"}," Image ",-1),O={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},G=["src"],R={key:0,class:"bg-gray-50 p-2"},q={class:"flex items-center mt-2 gap-4 justify-end"};function z(m,e,s,A,J,i){const g=a("Head"),n=a("FormKit"),_=a("MenuSideBar");return r(),l(y,null,[d(g,{title:"Users"}),d(_,null,{default:p(()=>[t("div",f,[t("div",v,[d(n,{type:"button",label:"Go Back",onClick:e[0]||(e[0]=u=>i.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),t("div",w,[t("dl",null,[k,t("div",B,[C,t("dd",j,o(s.user.name),1)]),t("div",F,[I,t("dd",N,o(s.user.email),1)]),t("div",S,[E,t("dd",U,o(s.user.status),1)]),t("div",V,[D,t("dd",H,o(s.user.role),1)]),t("div",K,[M,t("dd",O,[t("img",{class:"max-w-[20%]",src:s.user.image},null,8,G)])]),s.can.edit?(r(),l("div",R,[t("div",q,[d(n,{type:"button",label:"Edit",onClick:e[1]||(e[1]=u=>i.edit(s.user.id)),classes:{outer:"text-right m-0",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}})])])):h("",!0)])])])])]),_:1})],64)}const P=x(b,[["render",z]]);export{P as default};