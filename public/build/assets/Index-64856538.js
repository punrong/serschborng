import{D as k,h as c}from"./DataTable-08a38a4e.js";import{_ as V,d as g,h,i as b,a as S,r as a,o as f,c as M,b as l,w as o,F as A,e as s,j as _,g as y,n as B,t as I}from"./app-2745b5b5.js";const N={components:{DataTable:k},data(){return{apiUrl:c("role.getData"),searchableCols:["name"],statuses:["ACT","DSBL"],filters:null,deleteRolesDialog:!1,selectedRoles:null,isDeleteSingleRole:!1,deleteId:null}},props:{can:{type:Object,default:()=>({})}},methods:{addNew(){g.Inertia.get(c("role.create"))},show(t){g.Inertia.get(c("role.show",t))},edit(t){g.Inertia.get(c("role.edit",t),{isTriggeredFromTable:!0})},initFilters(){this.filters={global:{value:null,matchMode:h.CONTAINS},name:{operator:b.AND,constraints:[{value:null,matchMode:h.STARTS_WITH}]},code:{operator:b.AND,constraints:[{value:null,matchMode:h.STARTS_WITH}]},status:{operator:b.OR,constraints:[{value:null,matchMode:h.EQUALS}]}}},confirmMultipleDeleteSelected(){this.deleteRolesDialog=!0},confirmSingleDeleteSelected(t){this.deleteRolesDialog=!0,this.isDeleteSingleRole=!0,this.deleteId=t},deleteRoles(){this.isDeleteSingleRole?S.delete(c("role.destroy",this.deleteId)).then(t=>{t.data.success&&this.$refs.roleTbl.loadLazyData()}).catch(t=>{this.$toast.add({severity:"error",summary:"Error Message",detail:t.response.data.message,life:3e3})}):S.delete(c("role.deleteMultipleRecord",{roleList:this.selectedRoles})).then(t=>{t.data.success&&this.$refs.roleTbl.loadLazyData()}).catch(t=>{this.$toast.add({severity:"error",summary:"Error Message",detail:t.response.data.message,life:3e3})}),this.deleteId=null,this.selectedRoles=null,this.isDeleteSingleRole=!1,this.deleteRolesDialog=!1},deleteBtnStatus(t){this.selectedRoles=t}},created(){this.initFilters()}},U={class:"mx-auto flex container items-center justify-center mt-4"},F={class:"rounded w-full p-2 bg-white"},L=s("div",{class:"bg-white shadow sm:rounded-lg px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("header",null,[s("h2",{class:"text-2xl font-bold text-gray-900"},"Roles")])],-1),z=s("div",{class:"confirmation-content"},[s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),s("span",null,"Are you sure you want to delete the selected record(s)?")],-1);function E(t,m,p,H,i,d){const w=a("Head"),r=a("Column"),D=a("InputText"),C=a("Dropdown"),u=a("Button"),x=a("DataTable"),v=a("Dialog"),R=a("Toast"),T=a("MenuSideBar");return f(),M(A,null,[l(w,{title:"Roles"}),l(T,null,{default:o(()=>[s("div",U,[s("div",F,[L,l(x,{ref:"roleTbl",apiUrl:i.apiUrl,columnFilters:i.filters,searchableColumns:i.searchableCols,can:p.can,onAddNew:d.addNew,onConfirmMultipleDeleteSelected:d.confirmMultipleDeleteSelected,onDeleteBtnStatus:d.deleteBtnStatus},{default:o(()=>[p.can.delete?(f(),_(r,{key:0,selectionMode:"multiple",headerStyle:"width: 3em"})):y("",!0),l(r,{field:"name",header:"Name",sortable:!0,style:{"min-width":"12rem"}},{filter:o(({filterModel:e})=>[l(D,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(r,{field:"code",header:"Code",sortable:!0,style:{"min-width":"12rem"}},{filter:o(({filterModel:e})=>[l(D,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by code"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(r,{field:"sequence",header:"Sequence",sortable:!0,style:{"min-width":"12rem"}}),l(r,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:o(e=>[s("span",{class:B("text-white p-2 rounded-md "+(e.data.status==="ACT"?"bg-green-500":"bg-red-500"))},I(e.data.status),3)]),filter:o(({filterModel:e})=>[l(C,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:i.statuses,placeholder:"Any",class:"p-column-filter",showClear:!0},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),l(r,{field:"actions",header:"Actions",exportable:!1,style:{"min-width":"8rem"}},{body:o(e=>[l(u,{icon:"pi pi-eye",class:"p-button-rounded bg-[#0078d4]",style:{"margin-right":"5px"},onClick:n=>d.show(e.data.id)},null,8,["onClick"]),p.can.edit?(f(),_(u,{key:0,icon:"pi pi-pencil",class:"p-button-rounded p-button-warning",style:{"margin-right":"5px"},onClick:n=>d.edit(e.data.id)},null,8,["onClick"])):y("",!0),p.can.delete?(f(),_(u,{key:1,icon:"pi pi-trash",class:"p-button-rounded p-button-danger",onClick:n=>d.confirmSingleDeleteSelected(e.data.id)},null,8,["onClick"])):y("",!0)]),_:1})]),_:1},8,["apiUrl","columnFilters","searchableColumns","can","onAddNew","onConfirmMultipleDeleteSelected","onDeleteBtnStatus"])])]),l(v,{visible:i.deleteRolesDialog,"onUpdate:visible":m[1]||(m[1]=e=>i.deleteRolesDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:o(()=>[l(u,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:m[0]||(m[0]=e=>i.deleteRolesDialog=!1)}),l(u,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:d.deleteRoles},null,8,["onClick"])]),default:o(()=>[z]),_:1},8,["visible"]),l(R)]),_:1})],64)}const q=V(N,[["render",E]]);export{q as default};