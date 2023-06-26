import{_ as p}from"./InputError-0ea445f3.js";import{_ as f,a as _,r as i,o as c,c as m,e,b as s,w as b,t as g,g as x}from"./app-57226b36.js";const h={props:{joinUs:{type:Object,default:()=>({})}},components:{InputError:p},data(){return{formData:{name:"",email:"",message:null},errorMsg:null,complete:!1}},methods:{subscribe(){_.post(route("join-our-networks.store"),this.formData).then(t=>{t.data.success&&(this.$formkit.reset("joinUsForm"),this.complete=!0)}).catch(t=>{t.response.status===422&&(this.errorMsg=t.response.data.message),this.$toast.add({severity:"error",summary:"Error Message",detail:t.response.data.message,life:3e3})})}}},v={class:"relative block pt-28 lg:pt-0 bg-gray-900"},w={class:"container mx-auto px-4"},y={class:"flex flex-wrap justify-center lg:-mt-64 -mt-48"},k={class:"w-full lg:w-6/12 px-4"},j={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"},M={class:"flex-auto p-5 lg:p-10"},E={class:"text-2xl font-semibold text-center"},F=["innerHTML"],U={class:"relative w-full mb-3 mt-8"},V={class:"relative w-full mb-3"},C={class:"relative w-full mb-3"},D={class:"text-center mt-6"},N={key:0,class:"text-green-500 text-sm font-bold"};function B(t,a,r,I,l,d){const o=i("FormKit"),u=i("InputError");return c(),m("section",v,[e("div",w,[e("div",y,[e("div",k,[e("div",j,[s(o,{modelValue:l.formData,"onUpdate:modelValue":a[1]||(a[1]=n=>l.formData=n),type:"form",id:"joinUsForm",actions:!1,config:{classes:{outer:"block text-gray-700 text-xs font-bold mb-2",input:"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full",message:"text-red-500 text-sm font-bold",messages:"pt-2",label:"block mb-1"}}},{default:b(()=>[e("div",M,[e("h4",E,g(r.joinUs.title),1),e("p",{class:"leading-relaxed mt-1 mb-4 text-gray-600 text-center",innerHTML:r.joinUs.description},null,8,F),e("div",U,[s(o,{type:"text",label:"Full Name",name:"name",validation:"required",placeholder:"Full Name"})]),e("div",V,[s(o,{type:"email",label:"Email",name:"email",validation:"required|email",placeholder:"Email"})]),e("div",C,[s(o,{type:"textarea",label:"Message",name:"message",rows:"4",cols:"80",placeholder:"Type a message..."})]),e("div",D,[s(o,{type:"button",label:"Send Message",onClick:a[0]||(a[0]=n=>d.subscribe()),classes:{outer:"$reset m-0 text-center",input:"$reset bg-blue-500 text-white active:bg-blue-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"}}),l.complete?(c(),m("div",N," Submitted successfully! ")):x("",!0),s(u,{class:"text-red-500 text-sm font-bold",message:l.errorMsg},null,8,["message"])])])]),_:1},8,["modelValue"])])])])])])}const $=f(h,[["render",B]]);export{$ as default};
