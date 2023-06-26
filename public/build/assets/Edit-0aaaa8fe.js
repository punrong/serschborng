import{_ as f,a as p,d as l,r as n,o as h,c as x,b as t,w as u,F as _,e as a}from"./app-57226b36.js";const y={data(){return{formData:{},statuses:{ACT:"ACTIVE",PND:"PENDING",DSBL:"DISABLED"},roleList:{}}},props:{user:{type:Object,default:()=>({})},isTriggeredFromTable:{type:Boolean,default:!1}},methods:{initForm(){this.formData=this.user},onSubmit(){const e=new FormData;e.append("name",this.formData.name),e.append("email",this.formData.email),e.append("status",this.formData.status),e.append("role",this.formData.role),e.append("image",this.formData.image),e.append("_method","PUT");const o={headers:{"content-type":"multipart/form-data"}};p.post(route("user.update",this.formData.id),e,o).then(r=>{r.data.success&&l.Inertia.visit(route("user.index"))}).catch(r=>{this.$toast.add({severity:"error",summary:"Error Message",detail:r.response.data.message,life:3e3})})},goBack(){this.isTriggeredFromTable?l.Inertia.visit(route("user.index")):l.Inertia.get(route("user.show",this.formData.id))},getRoleList(){p.get(route("role.getRoleList")).then(e=>{this.roleList=e.data}).catch(e=>{this.$toast.add({severity:"error",summary:"Error Message",detail:e.response.data.message,life:3e3})})}},created(){this.initForm()},mounted(){this.getRoleList()}},D={class:"mx-auto flex container items-center justify-center mt-4"},v={class:"rounded w-full p-2 bg-white"},w={class:"px-4 bg-white shadow sm:rounded-lg"},B=a("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"}," User Information "),a("p",{class:"mt-1 text-sm text-gray-600"}," View user's name, email, status and role ")])],-1),S={class:"grid grid-cols-3 gap-x-4"};function E(e,o,r,F,i,d){const c=n("Head"),s=n("FormKit"),b=n("Toast"),g=n("MenuSideBar");return h(),x(_,null,[t(c,{title:"Users"}),t(g,null,{default:u(()=>[a("div",D,[a("div",v,[t(s,{type:"button",label:"Go Back",onClick:o[0]||(o[0]=m=>d.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),a("div",w,[B,t(s,{type:"form",onSubmit:d.onSubmit,modelValue:i.formData,"onUpdate:modelValue":o[1]||(o[1]=m=>i.formData=m),actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",input:"w-full rounded-md py-2",help:"text-xs text-gray-500",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:u(()=>[a("div",S,[t(s,{type:"text",label:"Name *",name:"name",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),t(s,{type:"email",label:"Email *",name:"email",validation:"required|email",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),t(s,{type:"select",label:"Status *",options:i.statuses,name:"status",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}},null,8,["options"]),t(s,{type:"select",label:"Role *",options:i.roleList,name:"role",placeholder:"Select a role",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}},null,8,["options"])]),t(s,{type:"image",label:"Image",name:"image",accept:".jpg,.png,.jpeg",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),t(s,{type:"submit",label:"Update",classes:{outer:"m-0 text-right",input:"$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2"}})]),_:1},8,["onSubmit","modelValue"])])])]),t(b)]),_:1})],64)}const I=f(y,[["render",E]]);export{I as default};
