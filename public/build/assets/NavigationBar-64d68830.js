import{_ as h,d as g,r as b,o as n,c as u,e,ae as p,t as c,b as f,n as s,g as m,k as v}from"./app-2745b5b5.js";const y={props:{pageSetting:{type:Object,default:()=>({})},activeMenu:{type:String,default:()=>"home"}},data(){return{isMenuOpen:!1,isDropdownOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},logout(){event.preventDefault(),g.Inertia.post(route("logout"))}}},_={class:"bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"},x={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"},w=["href"],k=["alt"],M={class:"flex custom-sm:order-2"},D={key:0,class:"relative invisible custom-sm:visible"},O={class:"mr-2 underline"},C={key:0,class:"absolute right-0 mt-2 py-2 bg-white shadow-md"},B=["href"],N={key:1,class:"mt-2 invisible custom-sm:visible"},z=["href"],S=e("span",{class:"sr-only"},"Open main menu",-1),H=e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),I=[S,H],j={class:"items-center justify-between hidden w-full custom-sm:flex custom-sm:w-auto custom-sm:order-1 mt-2",id:"navbar-sticky"},A={class:"flex flex-col p-4 custom-sm:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 custom-sm:flex-row custom-sm:space-x-8 custom-sm:mt-0 custom-sm:border-0 custom-sm:bg-white"},V=["href"],L=["href"],F=["href"],U=["href"],E=["href"],T={key:0,class:"custom-sm:hidden bg-gray-50"},q={class:"w-full custom-sm:block custom-sm:w-auto",id:"navbar-default"},G={class:"font-medium flex flex-col p-4 custom-sm:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 custom-sm:flex-row custom-sm:space-x-8 custom-sm:mt-0 custom-sm:border-0 custom-sm:bg-white"},J=["href"],K=["href"],P=["href"],Q=["href"],R=["href"],W=e("div",{class:"border-b border-gray-300 mb-5"},null,-1),X={key:0},Y=e("svg",{class:"w-5 h-5 ml-1","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Z={key:0,class:"absolute mt-2 py-2 bg-white shadow-md"},$=["href"],ee={key:1},te=["href"];function oe(t,r,o,se,i,l){const d=b("FontAwesomeIcon");return n(),u("nav",_,[e("div",x,[e("a",{href:t.route("home"),class:"flex"},[e("img",{src:p,class:"h-20 mr-3",alt:o.pageSetting.name},null,8,k)],8,w),e("div",M,[t.$page.props.auth.user?(n(),u("div",D,[e("button",{onClick:r[0]||(r[0]=(...a)=>l.toggleDropdown&&l.toggleDropdown(...a)),class:"flex items-center text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-3"},[e("span",O,c(t.$page.props.auth.user.name),1),f(d,{icon:"fa-solid fa-caret-down",class:s({"rotate-180":i.isDropdownOpen})},null,8,["class"])]),i.isDropdownOpen?(n(),u("ul",C,[e("li",null,[e("a",{href:t.route("dashboard"),class:"block px-4 py-2"},"Dashboard",8,B)]),e("li",null,[e("a",{href:"#",onClick:r[1]||(r[1]=a=>l.logout()),class:"block px-4 py-2"},"Logout")])])):m("",!0)])):(n(),u("div",N,[e("a",{href:t.route("login"),class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 custom-sm:mr-3"}," Member Sign In ",8,z)])),e("button",{"data-collapse-toggle":"navbar-sticky",type:"button",class:"inline-flex items-center p-2 mr-2 text-sm text-gray-500 rounded-lg custom-sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200","aria-controls":"navbar-sticky","aria-expanded":"false",onClick:r[2]||(r[2]=(...a)=>l.toggleMenu&&l.toggleMenu(...a))},I)]),e("div",j,[e("ul",A,[e("li",null,[e("a",{href:t.route("home"),class:s(["block py-2 pl-3 pr-4 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="home"?"text-blue-700 font-semibold":"text-gray-900"])},"Home",10,V)]),e("li",null,[e("a",{href:t.route("menu.about-us"),class:s(["block py-2 pl-3 pr-4 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="about-us"?"text-blue-700 font-semibold":"text-gray-900"])},"About Us",10,L)]),e("li",null,[e("a",{href:t.route("menu.mentorship"),class:s(["block py-2 pl-3 pr-4 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="mentorship"?"text-blue-700 font-semibold":"text-gray-900"])},"Mentorship",10,F)]),e("li",null,[e("a",{href:t.route("menu.opportunities"),class:s(["block py-2 pl-3 pr-4 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="opportunities"?"text-blue-700 font-semibold":"text-gray-900"])},"Opportunities",10,U)]),e("li",null,[e("a",{href:t.route("menu.blog"),class:s(["block py-2 pl-3 pr-4 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="blog"?"text-blue-700 font-semibold":"text-gray-900"])},"Blog",10,E)])])])]),i.isMenuOpen?(n(),u("div",T,[e("div",q,[e("ul",G,[e("li",null,[e("a",{href:t.route("home"),class:s(["block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:border-0 custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="home"?"text-white bg-blue-700":null])},"Home",10,J)]),e("li",null,[e("a",{href:t.route("menu.about-us"),class:s(["block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:border-0 custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="about-us"?"text-white bg-blue-700":null])},"About Us",10,K)]),e("li",null,[e("a",{href:t.route("menu.mentorship"),class:s(["block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:border-0 custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="mentorship"?"text-white bg-blue-700":null])},"Mentorship",10,P)]),e("li",null,[e("a",{href:t.route("menu.opportunities"),class:s(["block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:border-0 custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="opportunities"?"text-white bg-blue-700":null])},"Opportunities",10,Q)]),e("li",null,[e("a",{href:t.route("menu.blog"),class:s(["block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 custom-sm:hover:bg-transparent custom-sm:hover:text-blue-700 custom-sm:p-0",o.activeMenu==="blog"?"text-white bg-blue-700":null])},"Blog",10,R)]),W,t.$page.props.auth.user?(n(),u("li",X,[e("button",{onClick:r[3]||(r[3]=(...a)=>l.toggleDropdown&&l.toggleDropdown(...a)),"data-dropdown-toggle":"dropdownNavbar",class:"flex items-center justify-between underline py-2 pl-3 pr-4 text-gray-900 rounded"},[v(c(t.$page.props.auth.user.name)+" ",1),Y]),i.isDropdownOpen?(n(),u("ul",Z,[e("li",null,[e("a",{href:t.route("dashboard"),class:"block px-4 py-2"},"Dashboard",8,$)]),e("li",null,[e("a",{href:"#",onClick:r[4]||(r[4]=a=>l.logout()),class:"block px-4 py-2"},"Logout")])])):m("",!0)])):(n(),u("li",ee,[e("a",{href:t.route("login"),class:"py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm custom-sm:p-0"}," Member Sign In ",8,te)]))])])])):m("",!0)])}const le=h(y,[["render",oe]]);export{le as default};