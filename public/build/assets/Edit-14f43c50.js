import{_,a as h,d as m,r as n,o as x,c as y,b as e,w as l,F as v,e as o}from"./app-541770c2.js";import{_ as D}from"./InputError-b1f4105f.js";import{E}from"./Editor-6fcb2125.js";const k={components:{InputError:D,Editor:E},props:{page_settings:{type:Object,default:()=>({})}},data(){return{formData:{},errorMsg:null}},methods:{initForm(){this.formData=this.page_settings},onSubmit(){const t=new FormData;t.append("name",this.formData.name),t.append("email",this.formData.email),t.append("facebook",this.formData.facebook),t.append("instagram",this.formData.instagram),t.append("phone_number",this.formData.phone_number),t.append("copyrights",this.formData.copyrights),t.append("description",this.formData.description),t.append("logo",this.formData.logo),t.append("favicon",this.formData.favicon),t.append("_method","PUT");const s={headers:{"content-type":"multipart/form-data"}};h.post(route("page-settings.update",this.formData.id),t,s).then(r=>{r.data.success&&m.Inertia.visit(route("page-settings.index"))}).catch(r=>{r.response.status===422&&(this.errorMsg=r.response.data.message),this.$toast.add({severity:"error",summary:"Error Message",detail:r.response.data.message,life:3e3})})},goBack(){m.Inertia.visit(route("page-settings.index"))},updateEditorData(t){this.formData.description=t}},created(){this.initForm()}},w={class:"mx-auto flex container items-center justify-center mt-4"},F={class:"rounded w-full p-2 bg-white"},B={class:"px-4 bg-white shadow sm:rounded-lg"},M=o("div",{class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"}," Edit Page Settings "),o("p",{class:"mt-1 text-sm text-gray-600"}," Update name, email, phone number, logo, facebook link, description, and copyrights ")])],-1),S={class:"grid grid-cols-3 gap-x-4"},j={class:"grid grid-cols-3 gap-x-4"},I={class:"pb-4 mb-1"},U=o("span",{class:"block mb-1 font-bold text-base"},"Description *",-1);function q(t,s,r,V,i,p){const c=n("Head"),a=n("FormKit"),b=n("Editor"),u=n("InputError"),g=n("Toast"),f=n("MenuSideBar");return x(),y(v,null,[e(c,{title:"Mentors"}),e(f,null,{default:l(()=>[o("div",w,[o("div",F,[e(a,{type:"button",label:"Go Back",onClick:s[0]||(s[0]=d=>p.goBack()),classes:{outer:"mb-2",input:"bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2"}}),o("div",B,[M,e(a,{type:"form",modelValue:i.formData,"onUpdate:modelValue":s[1]||(s[1]=d=>i.formData=d),onSubmit:p.onSubmit,actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",input:"w-full rounded-md py-2",help:"text-xs text-gray-500",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:l(()=>[o("div",S,[e(a,{type:"text",label:"Name *",name:"name",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),e(a,{type:"email",label:"Email *",name:"email",validation:"required|email",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),e(a,{type:"tel",label:"Phone number",name:"phone_number",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}})]),o("div",j,[e(a,{type:"text",label:"Facebook Link *",name:"facebook",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),e(a,{type:"text",label:"Instagram Link *",name:"instagram",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),e(a,{type:"text",label:"Copyrights *",name:"copyrights",validation:"required",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}})]),e(a,{type:"image",label:"Logo *",name:"logo",accept:".jpg,.png,.jepg",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),e(a,{type:"image",label:"Favicon *",name:"favicon",accept:".jpg,.png,.jepg",classes:{outer:"pb-4",input:"border border-gray-400 px-2 mb-1"}}),o("div",I,[U,e(b,{content:i.formData.description,onUpdateEditorData:p.updateEditorData},null,8,["content","onUpdateEditorData"]),e(u,{class:"text-red-500 text-sm font-bold",message:i.errorMsg},null,8,["message"])]),e(a,{type:"submit",label:"Update",classes:{outer:"m-0 text-right",input:"$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2"}})]),_:1},8,["modelValue","onSubmit"])])])]),e(g)]),_:1})],64)}const P=_(k,[["render",q]]);export{P as default};