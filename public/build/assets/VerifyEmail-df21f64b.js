import{a9 as m,af as f,o as i,j as g,w as s,aa as _,b as o,ab as e,ac as p,c as h,g as y,e as a,k as n,n as b,ad as v,K as k}from"./app-2745b5b5.js";import{_ as x}from"./PrimaryButton-4369f775.js";const w=a("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},j={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=m(),d=()=>{t.post(route("verification.send"))},u=f(()=>c.status==="verification-link-sent");return(l,L)=>(i(),g(_,null,{default:s(()=>[o(e(p),{title:"Email Verification"}),w,u.value?(i(),h("div",V," A new verification link has been sent to the email address you provided during registration. ")):y("",!0),a("form",{onSubmit:k(d,["prevent"])},[a("div",E,[o(x,{class:b({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(v),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{j as default};