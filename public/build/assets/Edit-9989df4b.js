import{_ as x,a as m,d as l,r as i,o as h,c as y,b as t,w as p,F as v,e as s,p as S,f as w}from"./app-57226b36.js";import{_ as I}from"./InputError-0ea445f3.js";const D={components:{InputError:I},data(){return{formData:{},statuses:{ACT:"ACTIVE",DSBL:"DISABLED"},permissionList:null,errorMsg:null}},props:{role:{type:Object,default:()=>({})},isTriggeredFromTable:{type:Boolean,default:!1}},methods:{initForm(){this.formData=this.role},onSubmit(){m.put(route("role.update",this.formData.id),this.formData).then(e=>{e.data.success&&l.Inertia.visit(route("role.index"))}).catch(e=>{e.response.status===422&&(this.errorMsg=e.response.data.message),this.$toast.add({severity:"error",summary:"Error Message",detail:e.response.data.message,life:3e3})})},goBack(){this.isTriggeredFromTable?l.Inertia.visit(route("role.index")):l.Inertia.get(route("role.show",this.formData.id))},getPermissionList(){m.get(route("permission.getPermissionList")).then(e=>{this.permissionList=e.data}).catch(e=>{this.$toast.add({severity:"error",summary:"Error Message",detail:e.response.data.message,life:3e3})})}},created(){this.initForm()},mounted(){this.getPermissionList()}},u=e=>(S("data-v-a94effb0"),e=e(),w(),e),B={class:"mx-auto flex container items-center justify-center mt-4"},E={class:"rounded w-full p-2 bg-white"},V={class:"px-4 bg-white shadow sm:rounded-lg"},L=u(()=>s("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"}," Role Information "),s("p",{class:"mt-1 text-sm text-gray-600"}," Update role's name, status and permissions ")])],-1)),M={class:"grid grid-cols-3 gap-x-4"},k={class:"pb-4 px-2 mb-1"},F=u(()=>s("span",{class:"block mb-1 font-bold text-base"},"Permissions",-1)),T={class:"w-full rounded-md py-2"};function C(e,r,q,P,o,d){const c=i("Head"),a=i("FormKit"),b=i("InputError"),f=i("MultiSelect"),_=i("Toast"),g=i("MenuSideBar");return h(),y(v,null,[t(c,{title:"Roles"}),t(g,null,{default:p(()=>[s("div",B,[s("div",E,[t(a,{type:"button",label:"Go Back",onClick:r[0]||(r[0]=n=>d.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),s("div",V,[L,t(a,{type:"form",modelValue:o.formData,"onUpdate:modelValue":r[2]||(r[2]=n=>o.formData=n),onSubmit:d.onSubmit,actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",input:"w-full rounded-md py-2",help:"text-xs text-gray-500",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:p(()=>[s("div",M,[t(a,{type:"text",label:"Name *",name:"name",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),s("div",k,[t(a,{type:"text",label:"Code *",name:"code",validation:"required",classes:{input:"border border-gray-400"}}),t(b,{class:"text-red-500 text-sm font-bold",message:o.errorMsg},null,8,["message"])]),t(a,{type:"select",label:"Status *",options:o.statuses,name:"status",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}},null,8,["options"]),t(a,{type:"number",label:"Sequence",name:"sequence",validation:"number|min:1",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}})]),s("div",null,[F,s("div",T,[t(f,{modelValue:o.formData.permissions,"onUpdate:modelValue":r[1]||(r[1]=n=>o.formData.permissions=n),optionValue:"value",options:o.permissionList,optionLabel:"name",placeholder:"Select permissions"},null,8,["modelValue","options"])])]),t(a,{type:"submit",label:"Update",classes:{outer:"m-0 text-right",input:"$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2"}})]),_:1},8,["modelValue","onSubmit"])])])]),t(_)]),_:1})],64)}const N=x(D,[["render",C],["__scopeId","data-v-a94effb0"]]);export{N as default};
