import{_ as k,a as o,d as S,r,o as i,c as D,e as _,j as n,g as l}from"./app-57226b36.js";import f from"./Mission-e0d7af64.js";import C from"./Contact-2824c665.js";import U from"./Features-c2b6ca7b.js";import B from"./Carousel-4b5d1dd9.js";import O from"./Services-2971c04d.js";import W from"./Team-b7dfed62.js";import H from"./Blog-f5b5d2a6.js";import x from"./Testimonial-c10c3f7d.js";import d from"./RecentWorks-05ff8484.js";import M from"./NavigationBar-05ab2b19.js";import y from"./Footer-2bafb2fd.js";import"./InputError-0ea445f3.js";/* empty css                          */const L={name:"Sers Chborng",components:{Mission:f,Contact:C,Features:U,Carousel:B,Services:O,Team:W,NavigationBar:M,Footer:y,Blog:H,Testimonial:x,RecentWorks:d},data(){return{pageSetting:null,cover:null,joinUs:null,feature:null,aboutUsLeftText:null,aboutUsCard:null,ourMission:null,ourTeamTitle:null,ourTeamItem:null,ourServiceTitle:null,ourServiceItem:null,blogTitle:null,blogItem:null,testimonialTitle:null,testimonialItem:null,recentWorkTitle:null,recentWorkItem:null,coverBtnLabel:"Subscribe Now"}},methods:{getPageSetting(){o.get(route("public.getPageSettingData")).then(e=>{this.pageSetting=e.data})},getCoverData(){o.get(route("public.getHomeCover")).then(e=>{this.cover=e.data})},getJoinUsData(){o.get(route("public.getHomeJoinUs")).then(e=>{this.joinUs=e.data})},getFeatureData(){o.get(route("public.getHomeFeatures")).then(e=>{this.feature=e.data})},getAboutUsTextData(){o.get(route("public.getHomeAboutUsLeftText")).then(e=>{this.aboutUsLeftText=e.data})},getAboutUsCardData(){o.get(route("public.getHomeAboutUsCard")).then(e=>{this.aboutUsCard=e.data})},getOurMissionData(){o.get(route("public.getHomeOurMission")).then(e=>{this.ourMission=e.data})},getOurHeroTitleData(){o.get(route("public.getHomeOurTeamTitle")).then(e=>{this.ourTeamTitle=e.data})},getOurHeroItemData(){o.get(route("public.getHomeOurTeamItem")).then(e=>{this.ourTeamItem=e.data})},getOurServiceTitleData(){o.get(route("public.getHomeOurServiceTitle")).then(e=>{this.ourServiceTitle=e.data})},getOurServiceItemData(){o.get(route("public.getHomeOurServiceItem")).then(e=>{this.ourServiceItem=e.data})},getBlogPostTitleData(){o.get(route("public.getBlogTitle")).then(e=>{this.blogTitle=e.data})},getBlogPostItemData(){o.get(route("public.getBlogItem")).then(e=>{this.blogItem=e.data})},getTestimonialTitleData(){o.get(route("public.getHomeTestimonialTitle")).then(e=>{this.testimonialTitle=e.data})},getTestimonialItemData(){o.get(route("public.getHomeTestimonialItem")).then(e=>{this.testimonialItem=e.data})},getOurRecentWorkTitleData(){o.get(route("public.getHomeOurRecentWorkTitle")).then(e=>{this.recentWorkTitle=e.data})},getOurRecentWorkItemData(){o.get(route("public.getHomeOurRecentWorkItem")).then(e=>{this.recentWorkItem=e.data})},register(){S.Inertia.visit(route("register"))}},mounted(){this.getPageSetting(),this.getCoverData(),this.getJoinUsData(),this.getFeatureData(),this.getAboutUsTextData(),this.getAboutUsCardData(),this.getOurMissionData(),this.getOurHeroTitleData(),this.getOurHeroItemData(),this.getOurServiceTitleData(),this.getOurServiceItemData(),this.getBlogPostTitleData(),this.getBlogPostItemData(),this.getTestimonialTitleData(),this.getTestimonialItemData(),this.getOurRecentWorkTitleData(),this.getOurRecentWorkItemData()}},F={id:"app",class:"min-h-screen w-full"};function R(e,j,P,A,t,s){const a=r("NavigationBar"),u=r("Carousel"),m=r("Features"),g=r("Mission"),c=r("Testimonial"),T=r("Team"),h=r("RecentWorks"),p=r("Blog"),b=r("Services"),I=r("Contact"),v=r("Footer");return i(),D("div",F,[_("main",null,[t.pageSetting?(i(),n(a,{key:0,pageSetting:this.pageSetting},null,8,["pageSetting"])):l("",!0),t.cover?(i(),n(u,{key:1,cover:this.cover,hasCoverBtn:!this.$page.props.auth.user,coverBtnLabel:t.coverBtnLabel,onCoverBtnClicked:s.register},null,8,["cover","hasCoverBtn","coverBtnLabel","onCoverBtnClicked"])):l("",!0),t.feature&&t.aboutUsLeftText&&t.aboutUsCard?(i(),n(m,{key:2,feature:this.feature,aboutUsLeftText:this.aboutUsLeftText,aboutUsCard:t.aboutUsCard},null,8,["feature","aboutUsLeftText","aboutUsCard"])):l("",!0),t.ourMission?(i(),n(g,{key:3,ourMission:t.ourMission},null,8,["ourMission"])):l("",!0),t.testimonialTitle&&t.testimonialItem?(i(),n(c,{key:4,testimonialTitle:t.testimonialTitle,testimonialItem:t.testimonialItem},null,8,["testimonialTitle","testimonialItem"])):l("",!0),t.ourTeamTitle&&t.ourTeamItem?(i(),n(T,{key:5,ourTeamTitle:t.ourTeamTitle,ourTeamItem:t.ourTeamItem},null,8,["ourTeamTitle","ourTeamItem"])):l("",!0),t.recentWorkTitle&&t.recentWorkItem?(i(),n(h,{key:6,recentWorkTitle:t.recentWorkTitle,recentWorkItem:t.recentWorkItem},null,8,["recentWorkTitle","recentWorkItem"])):l("",!0),t.blogTitle&&t.blogItem?(i(),n(p,{key:7,blogTitle:t.blogTitle,blogItem:t.blogItem},null,8,["blogTitle","blogItem"])):l("",!0),t.ourServiceTitle&&t.ourServiceItem?(i(),n(b,{key:8,ourServiceTitle:t.ourServiceTitle,ourServiceItem:t.ourServiceItem},null,8,["ourServiceTitle","ourServiceItem"])):l("",!0),t.joinUs?(i(),n(I,{key:9,joinUs:this.joinUs},null,8,["joinUs"])):l("",!0),t.pageSetting?(i(),n(v,{key:10,pageSetting:this.pageSetting},null,8,["pageSetting"])):l("",!0)])])}const ee=k(L,[["render",R]]);export{ee as default};
