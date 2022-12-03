"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[741],{3097:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(821),n=["type"];const l={props:{type:{type:String,default:"submit"}}};const s=(0,r(3744).Z)(l,[["render",function(e,t,r,l,s,a){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:r.type,class:"border-lonestar-500 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 h-8 min-h-8 font-semibold uppercase text-sm border text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105"},[(0,o.renderSlot)(e.$slots,"default")],8,n)}]])},2479:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(821),n=["value"];const l={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}};const s=(0,r(3744).Z)(l,[["render",function(e,t,r,l,s,a){return(0,o.openBlock)(),(0,o.createElementBlock)("input",{class:(0,o.normalizeClass)(["text-sm outline-none border-opacity-20 flex-shrink transition-all duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-800 px-5 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10",r.modelValue?"":"focus:ltr:pl-8  focus:rtl:pr-8"]),value:r.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,42,n)}]])},741:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var o=r(821),n=r(9038),l=r(2479),s=r(3097),a=r(3633),i={class:"bg-almond-200 shadow"},c={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},u={class:"font-semibold text-xl text-gray-800 leading-tight"},d={class:"py-12"},p={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},m={class:"bg-whit shadow-sm sm:rounded-lg"},f={class:"p-6 bg-white border-b border-gray-200"},g=["onSubmit"],x={class:"grid grid-row-3 gap-1"},V={class:"grid sm:grid-cols-2 gap-2"},b=["textContent"],h=["textContent"],y={class:"grid sm:grid-cols-2 gap-2"},v=["textContent"],k=["textContent"],w={class:"grid sm:grid-cols-2 gap-2"},N={selected:"",disabled:"",value:""},E=["value"],C=["textContent"],$={class:"grid sm:grid-cols-2 gap-2"},_={class:"grid sm:grid-cols-2 gap-2"},B=["textContent"],S=["textContent"],D={class:"flex items-center justify-between mt-4"};const Z={__name:"Edit",props:{roles:Object,permissions:Object,user:Object,userRoles:Object,userPermissions:Object,countries:Object},setup:function(e){var t=e,r=(localStorage.getItem("locale"),{tag:"bg-lonestar-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",container:"relative mx-auto w-full flex items-center justify-end rounded-lg cursor-pointer border border-gray-300 rounded text-sm bg-white outline-none min-h-12 transition duration-200 mt-1 py-2",placeholder:"flex items-center h-full absolute top-0 pointer-events-none bg-transparent pl-4 text-gray-500 rtl:right-0  ltr:left-0",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 focus:outline-none appearance-none p-0 text-base font-sans box-border w-full",containerActive:"ring-1 border-transparent ring-almond-600",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2 h-3 py-px box-content mr-4 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none"}),Z=(0,n.cI)({first_name:t.user.first_name,last_name:t.user.last_name,email:t.user.email,phone:t.user.phone,country:t.user.country,region:t.user.region,roles:t.userRoles,permissions:[t.userPermissions],password:"",password_confirmation:""}),z=function(){Z.put(route("users.update",t.user.id),{preserveScroll:!0,onSuccess:function(){return Z.reset()}})};return function(t,U){var j=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(n.Fb),{title:t.$t("edit user")},null,8,["title"]),(0,o.createElementVNode)("header",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("h2",u,(0,o.toDisplayString)(e.user.first_name+" "+e.user.last_name),1)])]),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("form",{onSubmit:(0,o.withModifiers)(z,["prevent"])},[(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l.Z,{id:"first_name",type:"text",class:(0,o.normalizeClass)(["block mt-1 w-full",{"input-error":t.$page.props.errors.first_name}]),modelValue:(0,o.unref)(Z).first_name,"onUpdate:modelValue":U[0]||(U[0]=function(e){return(0,o.unref)(Z).first_name=e}),placeholder:t.$t("first name"),autofocus:"",autocomplete:"first_name"},null,8,["modelValue","placeholder","class"]),t.$page.props.errors.first_name?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)(t.$page.props.errors.first_name),class:"text-red-700 text-sm ml-2 mt-1"},null,8,b)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l.Z,{id:"last_name",type:"text",modelValue:(0,o.unref)(Z).last_name,"onUpdate:modelValue":U[1]||(U[1]=function(e){return(0,o.unref)(Z).last_name=e}),class:(0,o.normalizeClass)(["block mt-1 w-full",{"input-error":t.$page.props.errors.last_name}]),placeholder:t.$t("last name")},null,8,["modelValue","placeholder","class"]),t.$page.props.errors.last_name?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)(t.$page.props.errors.last_name),class:"text-red-700 text-sm ml-2 mt-1"},null,8,h)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",y,[(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l.Z,{id:"email",type:"email",class:(0,o.normalizeClass)(["block mt-1 w-full",{"input-error":t.$page.props.errors.email}]),modelValue:(0,o.unref)(Z).email,"onUpdate:modelValue":U[2]||(U[2]=function(e){return(0,o.unref)(Z).email=e}),placeholder:t.$t("email")},null,8,["modelValue","placeholder","class"]),t.$page.props.errors.email?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)(t.$page.props.errors.email),class:"text-red-700 text-sm ml-2 mt-1"},null,8,v)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l.Z,{id:"phone",type:"text",class:(0,o.normalizeClass)(["mt-1 block w-full",{"input-error":t.$page.props.errors.phone}]),modelValue:(0,o.unref)(Z).phone,"onUpdate:modelValue":U[3]||(U[3]=function(e){return(0,o.unref)(Z).phone=e}),autocomplete:"phone",placeholder:t.$t("phone")},null,8,["modelValue","placeholder","class"]),t.$page.props.errors.phone?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)(t.$page.props.errors.phone),class:"text-red-700 text-sm ml-2 mt-1"},null,8,k)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("div",null,[(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":U[4]||(U[4]=function(e){return(0,o.unref)(Z).country=e}),class:(0,o.normalizeClass)(["inline-flex appearance-none text-sm outline-none border-opacity-20 flex-shrink-0 transition-colors duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-500 px-5 pr-10 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10 w-full",{"text-gray-500":!(0,o.unref)(Z).country,"select-error":(0,o.unref)(Z).errors.country}])},[(0,o.createElementVNode)("option",N,(0,o.toDisplayString)(t.$t("select country")),1),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.countries,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:t},(0,o.toDisplayString)(e),9,E)})),256))],2),[[o.vModelSelect,(0,o.unref)(Z).country]]),(0,o.unref)(Z).errors.country?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)((0,o.unref)(Z).errors.country),class:"text-red-700 text-sm ml-2 mt-1"},null,8,C)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",$,[(0,o.createVNode)((0,o.unref)(a.Z),{id:"roles",mode:"tags",classes:(0,o.unref)(r),autocomplete:"roles",options:e.roles,modelValue:(0,o.unref)(Z).roles,"onUpdate:modelValue":U[5]||(U[5]=function(e){return(0,o.unref)(Z).roles=e}),placeholder:t.$t("select roles"),searchable:"",label:""},null,8,["classes","options","modelValue","placeholder"]),(0,o.createVNode)((0,o.unref)(a.Z),{id:"permissions",mode:"tags",classes:(0,o.unref)(r),autocomplete:"permissions",options:e.permissions,modelValue:(0,o.unref)(Z).permissions,"onUpdate:modelValue":U[6]||(U[6]=function(e){return(0,o.unref)(Z).permissions=e}),placeholder:t.$t("select permissions"),searchable:"",label:""},null,8,["classes","options","modelValue","placeholder"])]),(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l.Z,{class:(0,o.normalizeClass)(["block mt-1 w-full",{"input-error":t.$page.props.errors.password}]),type:"password",placeholder:t.$t("enter password"),modelValue:(0,o.unref)(Z).password,"onUpdate:modelValue":U[7]||(U[7]=function(e){return(0,o.unref)(Z).password=e})},null,8,["placeholder","modelValue","class"]),t.$page.props.errors.password?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)(t.$page.props.errors.password),class:"text-red-700 text-sm ml-2 mt-1"},null,8,B)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l.Z,{id:"password_confirmation",class:(0,o.normalizeClass)(["block mt-1 w-full",{"input-error":t.$page.props.errors.password_confirmation}]),type:"password",modelValue:(0,o.unref)(Z).password_confirmation,"onUpdate:modelValue":U[8]||(U[8]=function(e){return(0,o.unref)(Z).password_confirmation=e}),placeholder:t.$t("confirm password")},null,8,["modelValue","placeholder","class"]),t.$page.props.errors.password_confirmation?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,textContent:(0,o.toDisplayString)(t.$page.props.errors.password_confirmation),class:"text-red-700 text-sm ml-2 mt-1"},null,8,S)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",D,[(0,o.createVNode)(j,{href:t.route("users.index"),class:"text-sm underline hover:text-lonestar-500 font-semibold mx-1"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.$t("back")),1)]})),_:1},8,["href"]),(0,o.createVNode)(s.Z,{type:"submit",class:(0,o.normalizeClass)(["px-5",{"opacity-25":(0,o.unref)(Z).processing}]),disabled:(0,o.unref)(Z).processing},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.$t("edit")),1)]})),_:1},8,["class","disabled"])])])],40,g)])])])])],64)}}};r(2346);const z=Z}}]);