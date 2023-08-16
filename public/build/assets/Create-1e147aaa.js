import{_ as f,a as x,d,r,o as h,c as y,b as t,w as l,F as D,e as s,p as v,f as E}from"./app-541770c2.js";import{_ as w}from"./InputError-b1f4105f.js";import{E as I}from"./Editor-6fcb2125.js";const B={components:{InputError:w,Editor:I},data(){return{formData:{name:null,status:"ACT",email:null,image:null,phone_number:null,description:""},statuses:{ACT:"ACTIVE",PND:"PENDING",DSBL:"DISABLED"},errorMsg:null}},methods:{onSubmit(){const e=new FormData;e.append("name",this.formData.name),e.append("email",this.formData.email),e.append("status",this.formData.status),e.append("phone_number",this.formData.phone_number),e.append("image",this.formData.image),e.append("description",this.formData.description),x.post(route("mentor.store"),e).then(a=>{a.data.success&&d.Inertia.visit(route("mentor.index"))}).catch(a=>{a.response.status===422&&(this.errorMsg=a.response.data.message),this.$toast.add({severity:"error",summary:"Error Message",detail:a.response.data.message,life:3e3})})},goBack(){d.Inertia.visit(route("mentor.index"))},updateEditorData(e){this.formData.description=e}}},p=e=>(v("data-v-eba4216a"),e=e(),E(),e),S={class:"mx-auto flex container items-center justify-center mt-4"},C={class:"rounded w-full p-2 bg-white"},M={class:"px-4 bg-white shadow sm:rounded-lg"},k=p(()=>s("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"}," Create New Mentor "),s("p",{class:"mt-1 text-sm text-gray-600"}," Add mentor's name, email, phone number, status, image and description ")])],-1)),N={class:"grid grid-cols-3 gap-x-4"},V={class:"pb-4 mb-1"},A=p(()=>s("span",{class:"block mb-1 font-bold text-base"},"Mentor's Background *",-1));function F(e,a,T,j,n,i){const u=r("Head"),o=r("FormKit"),c=r("Editor"),b=r("InputError"),_=r("Toast"),g=r("MenuSideBar");return h(),y(D,null,[t(u,{title:"Mentors"}),t(g,null,{default:l(()=>[s("div",S,[s("div",C,[t(o,{type:"button",label:"Go Back",onClick:a[0]||(a[0]=m=>i.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),s("div",M,[k,t(o,{type:"form",modelValue:n.formData,"onUpdate:modelValue":a[1]||(a[1]=m=>n.formData=m),onSubmit:i.onSubmit,actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",input:"w-full rounded-md py-2",help:"text-xs text-gray-500",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:l(()=>[s("div",N,[t(o,{type:"text",label:"Name *",name:"name",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),t(o,{type:"email",label:"Email *",name:"email",validation:"required|email",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),t(o,{type:"tel",label:"Phone number",name:"phone_number",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),t(o,{type:"select",label:"Status *",options:n.statuses,name:"status",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}},null,8,["options"])]),t(o,{type:"image",label:"Image (2MB max)",name:"image",accept:".jpg,.png,.jepg",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),s("div",V,[A,t(c,{content:n.formData.description,onUpdateEditorData:i.updateEditorData},null,8,["content","onUpdateEditorData"]),t(b,{class:"text-red-500 text-sm font-bold",message:n.errorMsg},null,8,["message"])]),t(o,{type:"submit",label:"Create",classes:{outer:"m-0 text-right",input:"$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2"}})]),_:1},8,["modelValue","onSubmit"])])])]),t(_)]),_:1})],64)}const G=f(B,[["render",F],["__scopeId","data-v-eba4216a"]]);export{G as default};