import{_ as c,d,ah as _,o,c as i,e,t as n,F as u,E as g,ai as x}from"./app-2745b5b5.js";const p={props:{blogTitle:{type:Object,default:()=>({})},blogItem:{type:Object,default:()=>({})}},methods:{readBlog(t){d.Inertia.get(route("public.readBlog",t))}},mounted(){_({Ripple:x}),this.blogItem.forEach(t=>{t.description=t.description.replace(/<[^>]+>/g,"").slice(0,255)+"..."})}},h={class:"bg-white pt-14 pb-14"},b={class:"flex flex-wrap justify-center text-center mb-10"},f={class:"w-full lg:w-6/12 px-4"},m={class:"text-4xl font-semibold"},k=["innerHTML"],v={class:"grid grid-cols-1 sm:grid-cols-3 gap-4 m-5"},B=["onClick"],y=["src"],w={class:"p-6"},T={class:"mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50"},I={class:"mb-4 text-base text-neutral-600 dark:text-neutral-200"},j={class:"text-center"},C=["href"];function E(t,L,l,F,H,a){return o(),i("div",h,[e("div",b,[e("div",f,[e("h2",m,n(l.blogTitle.title),1),e("p",{class:"text-lg leading-relaxed text-gray-600",innerHTML:l.blogTitle.description},null,8,k)])]),e("div",v,[(o(!0),i(u,null,g(l.blogItem,(s,r)=>(o(),i("div",{key:r,class:"block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"},[e("a",{href:"#",onClick:M=>a.readBlog(s.id)},[e("img",{class:"rounded-t-lg",src:s.image},null,8,y),e("div",w,[e("h5",T,n(s.title),1),e("p",I,n(s.description),1)])],8,B)]))),128))]),e("div",j,[e("a",{href:t.route("menu.blog"),class:"inline-block rounded-full text-xl font-semibold leading-normal text-blue-500 transition duration-150 ease-in-out hover:underline focus:outline-none focus:ring-0 active:text-blue-500"}," See all articles ",8,C)])])}const S=c(p,[["render",E]]);export{S as default};