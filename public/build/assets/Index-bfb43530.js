import{_ as h,a as x,d as f,r,o as t,c as s,e,j as c,g as i,t as g,F as v,E as k,b as S}from"./app-57226b36.js";import y from"./Carousel-4b5d1dd9.js";import B from"./NavigationBar-05ab2b19.js";import C from"./Footer-2bafb2fd.js";import P from"./Pagination-53eb7dbe.js";const I={name:"App",components:{Carousel:y,Pagination:P,NavigationBar:B,Footer:C},props:{blogs:{type:Object,default:()=>({})},blogCover:{type:Object,default:()=>({})},blogPageTitle:{type:Object,default:()=>({})}},data(){return{pageSetting:null,blogItem:null,activeMenu:"blog"}},methods:{getPageSetting(){x.get(route("public.getPageSettingData")).then(o=>{this.pageSetting=o.data})},readBlog(o){f.Inertia.get(route("public.readBlog",o))}},mounted(){this.getPageSetting(),this.blogItem=this.blogs.data,this.blogItem.forEach(o=>{o.description=o.description.replace(/<[^>]+>/g,"").slice(0,255)+"..."})}},w={class:"min-h-screen w-full"},M={class:"bg-white pt-14 pb-14"},N={key:0,class:"flex flex-wrap justify-center text-center mb-10"},T={class:"w-full lg:w-6/12 px-4"},j={class:"text-4xl font-semibold"},F=["innerHTML"],E={key:1,class:"grid grid-cols-1 sm:grid-cols-3 gap-4 m-5"},L=["onClick"],O=["src"],V={class:"p-6"},D={class:"mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50"},H={class:"mb-4 text-base text-neutral-600 dark:text-neutral-200"};function A(o,q,a,z,n,d){const _=r("NavigationBar"),u=r("Carousel"),p=r("Pagination"),m=r("Footer");return t(),s("div",w,[e("main",null,[n.pageSetting?(t(),c(_,{key:0,pageSetting:this.pageSetting,activeMenu:n.activeMenu},null,8,["pageSetting","activeMenu"])):i("",!0),a.blogCover?(t(),c(u,{key:1,cover:this.blogCover},null,8,["cover"])):i("",!0),e("div",M,[a.blogPageTitle?(t(),s("div",N,[e("div",T,[e("h2",j,g(a.blogPageTitle.title),1),e("p",{class:"text-lg leading-relaxed text-gray-600",innerHTML:a.blogPageTitle.description},null,8,F)])])):i("",!0),n.blogItem?(t(),s("div",E,[(t(!0),s(v,null,k(n.blogItem,(l,b)=>(t(),s("div",{key:b,class:"block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"},[e("a",{href:"#",onClick:G=>d.readBlog(l.id)},[e("img",{class:"rounded-t-lg",src:l.image},null,8,O),e("div",V,[e("h5",D,g(l.title),1),e("p",H,g(l.description),1)])],8,L)]))),128))])):i("",!0),S(p,{data:a.blogs},null,8,["data"])]),n.pageSetting?(t(),c(m,{key:2,pageSetting:this.pageSetting},null,8,["pageSetting"])):i("",!0)])])}const W=h(I,[["render",A]]);export{W as default};
