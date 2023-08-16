import{a9 as c,r as w,o as n,c as u,b as o,w as d,e as l,an as m,d as f,ab as s,W as b,g as _}from"./app-541770c2.js";import{_ as i}from"./InputError-b1f4105f.js";const g=l("header",null,[l("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),l("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),x={class:"flex items-center gap-4"},y={key:0,class:"font-bold text-base text-gray-600 mt-4"},F={__name:"UpdatePasswordForm",setup(V){const e=c({current_password:"",password:"",password_confirmation:""}),p=()=>{e.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>{m("updatePasswordForm"),e.reset(),setTimeout(()=>{f.Inertia.post(route("logout"))},2e3)},onError:()=>{m("updatePasswordForm"),e.reset()}})};return(P,t)=>{const a=w("FormKit");return n(),u("section",null,[g,o(a,{type:"form",id:"updatePasswordForm",onSubmit:p,actions:!1,config:{classes:{label:"block mb-1 font-bold text-base",outer:"mt-6",input:"w-full rounded-md py-2",message:"text-red-500 text-sm font-bold",messages:"pt-2"}}},{default:d(()=>[o(a,{id:"current_password",type:"password",name:"password",label:"Current Password *",validation:"required",modelValue:s(e).current_password,"onUpdate:modelValue":t[0]||(t[0]=r=>s(e).current_password=r),classes:{outer:"mt-1 block w-full"}},null,8,["modelValue"]),o(i,{message:s(e).errors.current_password,class:"mt-2 text-red-500 text-sm font-bold"},null,8,["message"]),o(a,{type:"group"},{default:d(()=>[o(a,{type:"password",name:"password",id:"password",label:"New Password *",validation:"required",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=r=>s(e).password=r),classes:{outer:"mt-1 block w-full"}},null,8,["modelValue"]),o(i,{message:s(e).errors.password,class:"mt-2 text-red-500 text-sm font-bold"},null,8,["message"]),o(a,{id:"password_confirmation",type:"password",name:"password_confirm",label:"Confirm New Password *",modelValue:s(e).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=r=>s(e).password_confirmation=r),validation:"required|confirm","validation-label":"Password confirmation",classes:{outer:"mt-1 block w-full"}},null,8,["modelValue"])]),_:1}),l("div",x,[o(a,{type:"submit",label:"Save",disabled:s(e).processing,classes:{outer:s(e).processing?"m-0 text-right opacity-25":"m-0 text-right",input:"bg-blue-500 text-white font-bold px-3 w-auto mb-2 "}},null,8,["disabled","classes"]),o(b,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:d(()=>[s(e).recentlySuccessful?(n(),u("p",y," Saved. Please log in again ")):_("",!0)]),_:1})])]),_:1})])}}};export{F as default};