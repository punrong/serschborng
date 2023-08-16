import{_ as g,a as _,d as i,r as a,o as f,c as x,b as e,w as p,F as y,e as s,p as h,f as v}from"./app-541770c2.js";import{_ as w}from"./InputError-b1f4105f.js";const I={components:{InputError:w},data(){return{formData:{},statuses:{ACT:"ACTIVE",DSBL:"DISABLED"},errorMsg:null}},props:{category:{type:Object,default:()=>({})},isTriggeredFromTable:{type:Boolean,default:!1}},methods:{initForm(){this.formData=this.category},onSubmit(){_.put(route("category.update",this.formData.id),this.formData).then(t=>{t.data.success&&i.Inertia.visit(route("category.index"))}).catch(t=>{t.response.status===422&&(this.errorMsg=t.response.data.message),this.$toast.add({severity:"error",summary:"Error Message",detail:t.response.data.message,life:3e3})})},goBack(){this.isTriggeredFromTable?i.Inertia.visit(route("category.index")):i.Inertia.get(route("category.show",this.formData.id))}},created(){this.initForm()}},S=t=>(h("data-v-5358e0ae"),t=t(),v(),t),B={class:"mx-auto flex container items-center justify-center mt-4"},D={class:"rounded w-full p-2 bg-white"},E={class:"px-4 bg-white shadow sm:rounded-lg"},C=S(()=>s("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"}," Category Information "),s("p",{class:"mt-1 text-sm text-gray-600"}," Update category's title, status and description ")])],-1)),F={class:"grid grid-cols-3 gap-x-4"},T={class:"pb-4 px-2 mb-1"};function k(t,r,M,V,n,d){const m=a("Head"),o=a("FormKit"),u=a("InputError"),c=a("Toast"),b=a("MenuSideBar");return f(),x(y,null,[e(m,{title:"Categories"}),e(b,null,{default:p(()=>[s("div",B,[s("div",D,[e(o,{type:"button",label:"Go Back",onClick:r[0]||(r[0]=l=>d.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),s("div",E,[C,e(o,{type:"form",modelValue:n.formData,"onUpdate:modelValue":r[1]||(r[1]=l=>n.formData=l),onSubmit:d.onSubmit,actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",input:"w-full rounded-md py-2",help:"text-xs text-gray-500",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:p(()=>[s("div",F,[e(o,{type:"text",label:"Name *",name:"name",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),s("div",T,[e(o,{type:"text",label:"Code *",name:"code",validation:"required",classes:{input:"border border-gray-400"}}),e(u,{class:"text-red-500 text-sm font-bold",message:n.errorMsg},null,8,["message"])]),e(o,{type:"select",label:"Status *",options:n.statuses,name:"status",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}},null,8,["options"]),e(o,{type:"number",label:"Sequence",name:"sequence",validation:"number|min:1",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}})]),s("div",null,[e(o,{type:"textarea",label:"Description",name:"description",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}})]),e(o,{type:"submit",label:"Update",classes:{outer:"m-0 text-right",input:"$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2"}})]),_:1},8,["modelValue","onSubmit"])])])]),e(c)]),_:1})],64)}const N=g(I,[["render",k],["__scopeId","data-v-5358e0ae"]]);export{N as default};