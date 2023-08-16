import{_ as b,a as f,d as n,r as i,o as g,c as x,b as e,w as l,F as h,e as t}from"./app-2745b5b5.js";const _={data(){return{formData:{},statuses:{ACT:"ACTIVE",DSBL:"DISABLED"}}},props:{permission:{type:Object,default:()=>({})},isTriggeredFromTable:{type:Boolean,default:!1}},methods:{initForm(){this.formData=this.permission},onSubmit(){f.put(route("permission.update",this.formData.id),this.formData).then(o=>{o.data.success&&n.Inertia.visit(route("permission.index"))}).catch(o=>{this.$toast.add({severity:"error",summary:"Error Message",detail:o.response.data.message,life:3e3})})},goBack(){this.isTriggeredFromTable?n.Inertia.visit(route("permission.index")):n.Inertia.get(route("permission.show",this.formData.id))}},created(){this.initForm()}},y={class:"mx-auto flex container items-center justify-center mt-4"},w={class:"rounded w-full p-2 bg-white"},v={class:"px-4 bg-white shadow sm:rounded-lg"},B=t("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"}," Permission Information "),t("p",{class:"mt-1 text-sm text-gray-600"}," Update permission's name and status ")])],-1),D={class:"grid grid-cols-2 gap-x-4"};function S(o,a,F,T,r,d){const u=i("Head"),s=i("FormKit"),p=i("Toast"),c=i("MenuSideBar");return g(),x(h,null,[e(u,{title:"Permissions"}),e(c,null,{default:l(()=>[t("div",y,[t("div",w,[e(s,{type:"button",label:"Go Back",onClick:a[0]||(a[0]=m=>d.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),t("div",v,[B,e(s,{type:"form",modelValue:r.formData,"onUpdate:modelValue":a[1]||(a[1]=m=>r.formData=m),onSubmit:d.onSubmit,actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",input:"w-full rounded-md py-2",help:"text-xs text-gray-500",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:l(()=>[t("div",D,[e(s,{type:"text",label:"Name *",name:"name",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),e(s,{type:"select",label:"Status *",options:r.statuses,name:"status",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}},null,8,["options"])]),e(s,{type:"submit",label:"Update",classes:{outer:"m-0 text-right",input:"$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2"}})]),_:1},8,["modelValue","onSubmit"])])])]),e(p)]),_:1})],64)}const I=b(_,[["render",S]]);export{I as default};