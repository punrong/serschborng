import{_ as x,d as c,r as m,o as p,c as r,b as d,w as u,F as h,e as t,t as e,g as y}from"./app-57226b36.js";const b={props:{appointment:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},methods:{edit(n){c.Inertia.get(route("appointment.edit",n))},goBack(){c.Inertia.visit(route("appointment.index"))}}},f={class:"mx-auto flex container items-center justify-center mt-4"},v={class:"rounded w-full p-2 bg-white"},w={class:"border-t border-gray-200 bg-white shadow sm:rounded-lg"},k=t("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"}," Appointment Information "),t("p",{class:"mt-1 text-sm text-gray-600"}," View appointment's mentee, mentor, method, description, appointment datetime, status and opportunity ")])],-1),B={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},C=t("dt",{class:"text-md font-medium text-gray-900"}," Mentee ",-1),M={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},j={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},D=t("dt",{class:"text-md font-medium text-gray-900"}," Mentor ",-1),F={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},S={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},V=t("dt",{class:"text-md font-medium text-gray-900"}," Method ",-1),A={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},I={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},N=t("dt",{class:"text-md font-medium text-gray-900"}," Appointment Datetime ",-1),O={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},E={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},H=t("dt",{class:"text-md font-medium text-gray-900"}," Status ",-1),K={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},G={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},q=t("dt",{class:"text-md font-medium text-gray-900"}," Opportunity ",-1),z={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},J={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},L=t("dt",{class:"text-md font-medium text-gray-900"}," Description ",-1),P={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},Q={key:0,class:"bg-white p-2"},R={class:"flex items-center mt-2 gap-4 justify-end"};function T(n,o,s,U,W,i){const l=m("Head"),a=m("FormKit"),g=m("MenuSideBar");return p(),r(h,null,[d(l,{title:"Appointments"}),d(g,null,{default:u(()=>[t("div",f,[t("div",v,[d(a,{type:"button",label:"Go Back",onClick:o[0]||(o[0]=_=>i.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),t("div",w,[t("dl",null,[k,t("div",B,[C,t("dd",M,e(s.appointment.mentee),1)]),t("div",j,[D,t("dd",F,e(s.appointment.mentor),1)]),t("div",S,[V,t("dd",A,e(s.appointment.method),1)]),t("div",I,[N,t("dd",O,e(s.appointment.appointment_datetime),1)]),t("div",E,[H,t("dd",K,e(s.appointment.status),1)]),t("div",G,[q,t("dd",z,e(s.appointment.opportunity),1)]),t("div",J,[L,t("dd",P,e(s.appointment.description),1)]),s.can.edit?(p(),r("div",Q,[t("div",R,[d(a,{type:"button",label:"Edit",onClick:o[1]||(o[1]=_=>i.edit(s.appointment.id)),classes:{outer:"text-right m-0",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}})])])):y("",!0)])])])])]),_:1})],64)}const Y=x(b,[["render",T]]);export{Y as default};
