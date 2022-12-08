"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10],{3097:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(821),n=["type"];const l={props:{type:{type:String,default:"submit"}}};const a=(0,o(3744).Z)(l,[["render",function(e,t,o,l,a,s){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:o.type,class:"border-lonestar-500 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 h-8 min-h-8 font-semibold uppercase text-sm border text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105"},[(0,r.renderSlot)(e.$slots,"default")],8,n)}]])},2479:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(821),n=["value"];const l={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}};const a=(0,o(3744).Z)(l,[["render",function(e,t,o,l,a,s){return(0,r.openBlock)(),(0,r.createElementBlock)("input",{class:(0,r.normalizeClass)(["text-sm outline-none border-opacity-20 flex-shrink transition-all duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-800 px-5 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10",o.modelValue?"":"focus:ltr:pl-8  focus:rtl:pr-8"]),value:o.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,42,n)}]])},4503:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(821),n={class:"block font-medium text-sm text-gray-700"},l={key:0},a={key:1};const s={props:["value"]};const c=(0,o(3744).Z)(s,[["render",function(e,t,o,s,c,i){return(0,r.openBlock)(),(0,r.createElementBlock)("label",n,[o.value?((0,r.openBlock)(),(0,r.createElementBlock)("span",l,(0,r.toDisplayString)(o.value),1)):((0,r.openBlock)(),(0,r.createElementBlock)("span",a,[(0,r.renderSlot)(e.$slots,"default")]))])}]])},246:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(821),n={key:0},l=(0,r.createElementVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),a={class:"mt-3 list-disc list-inside text-sm text-red-600"};const s={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}};const c=(0,o(3744).Z)(s,[["render",function(e,t,o,s,c,i){return i.hasErrors?((0,r.openBlock)(),(0,r.createElementBlock)("div",n,[l,(0,r.createElementVNode)("ul",a,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(i.errors,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{key:t},(0,r.toDisplayString)(e),1)})),128))])])):(0,r.createCommentVNode)("",!0)}]])},1525:(e,t,o)=>{o.d(t,{Z:()=>k});var r=o(821),n=o(4396),l=o(5374),a=o(2616),s=o(9038),c={class:"xl:w-2/5 lg:w-5/12 md:w-1/2 sm:w-2/3 w-full"},i=["dir"],u={class:"border-b-4 border-lonestar-500"},d={class:"flex justify-between"},m={class:"mx-4 py-1 inline-flex rounded-md"},p={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-lonestar-800 hover:text-lonestar-500 focus:outline-none transform transition ease-in-out duration-150 hover:scale-105 focus:scale-105"},f=(0,r.createElementVNode)("svg",{class:"mx-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),x={class:"flex text-sm"},v={class:"text-lonestar-500"},g={class:"text-center text-base md:text-3xl transform transition ease-in-out duration-150"},h={class:"xl:w-2/5 lg:w-5/12 md:w-1/2 sm:w-2/3 w-full"},V={class:"md:px-12 xl:px-20 pt-4 max-w-2xl"},b=["dir"];const k={__name:"Authenticating",setup:function(e){var t=localStorage.getItem("locale");return(0,r.onMounted)((function(){if((0,s.qt)().props.value.locale!==t){var e="/locale/:locale";e=e.replace(":locale",t),window.location.replace(e)}})),function(e,o){var s=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"p-8 min-h-screen flex flex-col pt-6 sm:pt-0 bg-almond-400",style:(0,r.normalizeStyle)({backgroundImage:"url('~@/../images/authenticating.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat"})},[(0,r.createElementVNode)("section",c,[(0,r.createElementVNode)("div",{dir:"ar"===(0,r.unref)(t)?"rtl":"ltr"},[(0,r.createElementVNode)("nav",u,[(0,r.createElementVNode)("div",d,[(0,r.createVNode)(l.Z,{align:"left"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("span",m,[(0,r.createElementVNode)("button",p,[(0,r.createTextVNode)((0,r.toDisplayString)(e.$i18n.locale.toUpperCase())+" ",1),f])])]})),_:1}),(0,r.createElementVNode)("div",x,[(0,r.createVNode)(s,{href:e.route("login"),class:(0,r.normalizeClass)(["flex items-center mx-4 focus:outline-none transform transition ease-in-out duration-75 focus:scale-105 hover:scale-105",{"font-bold":e.route().current("login")}])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("login")),1)]})),_:1},8,["href","class"]),(0,r.createVNode)(s,{href:e.route("register"),class:(0,r.normalizeClass)(["flex items-center mx-4 focus:outline-none transform transition ease-in-out duration-75 focus:scale-105 hover:scale-105",{"font-bold":e.route().current("register")}])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.$t("register")),1)]})),_:1},8,["href","class"])])])]),(0,r.createElementVNode)("div",v,[(0,r.createVNode)(s,{href:"/",class:"focus:outline-none text-lonestar-500 transition ease-in-out duration-150"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(n.Z,{class:"mx-auto w-52 h-52 fill-current transform transition ease-in-out duration-150 hover:scale-110"}),(0,r.createElementVNode)("div",g,(0,r.toDisplayString)(e.$t("slogan")),1)]})),_:1})])],8,i)]),(0,r.createElementVNode)("section",h,[(0,r.createElementVNode)("div",V,[(0,r.createVNode)(a.Z,{flash:e.$page.props.flash,errors:e.$page.props.errors},null,8,["flash","errors"]),(0,r.createElementVNode)("div",{dir:"ar"===(0,r.unref)(t)?"rtl":"ltr"},[(0,r.renderSlot)(e.$slots,"default")],8,b)])])],4)}}}},9010:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var r=o(821),n=(0,r.createElementVNode)("h1",{class:"font-bold text-lg text-lonestar-600"},"Recover your password",-1),l=(0,r.createElementVNode)("div",{class:"mb-4 mt-1 text-sm text-lonestar-600"}," Please enter your email address and we'll send you instructions on how to reset your password. ",-1),a={key:0,class:"mb-4 font-medium text-sm text-green-600"},s={class:"flex items-center justify-end mt-4"};var c=o(3097),i=o(1525),u=o(2479),d=o(4503),m=o(246),p=o(9038);const f={layout:i.Z,components:{BreezeButton:c.Z,BreezeInput:u.Z,BreezeLabel:d.Z,BreezeValidationErrors:m.Z,Head:p.Fb},props:{status:String},data:function(){return{form:this.$inertia.form({email:""})}},methods:{submit:function(){this.form.post(this.route("password.email"))}}};const x=(0,o(3744).Z)(f,[["render",function(e,t,o,c,i,u){var d=(0,r.resolveComponent)("Head"),m=(0,r.resolveComponent)("BreezeValidationErrors"),p=(0,r.resolveComponent)("BreezeInput"),f=(0,r.resolveComponent)("BreezeButton");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(d,{title:"Forgot Password"}),n,l,o.status?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,(0,r.toDisplayString)(o.status),1)):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(m,{class:"mb-4"}),(0,r.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(){return u.submit&&u.submit.apply(u,arguments)}),["prevent"]))},[(0,r.createElementVNode)("div",null,[(0,r.createVNode)(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:i.form.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.email=e}),required:"",autofocus:"",autocomplete:"username",placeholder:"Email"},null,8,["modelValue"])]),(0,r.createElementVNode)("div",s,[(0,r.createVNode)(f,{class:(0,r.normalizeClass)({"opacity-25":i.form.processing}),disabled:i.form.processing},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Recover ")]})),_:1},8,["class","disabled"])])],32)],64)}]])}}]);