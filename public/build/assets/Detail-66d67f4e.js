import{_ as c,d as l,r as e,o as _,c as g,b as o,w as u,F as p,e as t,t as a}from"./app-57226b36.js";const x={props:{join_our_network:{type:Object,default:()=>({})}},methods:{goBack(){l.Inertia.visit(route("join-our-networks.index"))}}},h={class:"mx-auto flex container items-center justify-center mt-4"},y={class:"rounded w-full p-2 bg-white"},w={class:"border-t border-gray-200 bg-white shadow sm:rounded-lg"},b=t("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"}," Join Our Network Information "),t("p",{class:"mt-1 text-sm text-gray-600"}," View Join Our Network's name, email, and message ")])],-1),f={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},k=t("dt",{class:"text-md font-medium text-gray-900"}," Name ",-1),v={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},B={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},j=t("dt",{class:"text-md font-medium text-gray-900"}," Email ",-1),N={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"},C={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},F=t("dt",{class:"text-md font-medium text-gray-900"}," Message ",-1),M={class:"mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0"};function O(S,n,s,V,D,d){const i=e("Head"),m=e("FormKit"),r=e("MenuSideBar");return _(),g(p,null,[o(i,{title:"Categories"}),o(r,null,{default:u(()=>[t("div",h,[t("div",y,[o(m,{type:"button",label:"Go Back",onClick:n[0]||(n[0]=E=>d.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),t("div",w,[t("dl",null,[b,t("div",f,[k,t("dd",v,a(s.join_our_network.name),1)]),t("div",B,[j,t("dd",N,a(s.join_our_network.email),1)]),t("div",C,[F,t("dd",M,a(s.join_our_network.message),1)])])])])])]),_:1})],64)}const I=c(x,[["render",O]]);export{I as default};
