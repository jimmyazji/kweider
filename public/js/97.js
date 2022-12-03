"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97],{1097:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var o=l(821),a=l(9038),r=l(9680),s={class:"max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6 pb-10"},n={class:"max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10 px-5 lg:px-5"},c={class:"col-span-4 lg:text-center lg:pt-14 mb-10"},i=["src"],d={class:"flex items-center text-sm mt-4"},m={class:"flex"},p={class:"mr-1"},x={class:"font-bold"},u={class:"flex mt-2 text-lonestar-400 text-xs justify-start"},g={class:"col-span-8"},f={class:"hidden lg:flex justify-between mb-6"},V=[(0,o.createElementVNode)("g",{fill:"none","fill-rule":"evenodd"},[(0,o.createElementVNode)("path",{stroke:"#000","stroke-opacity":"0.012","stroke-width":".5",d:"M21 1v20.16H.84V1z"}),(0,o.createElementVNode)("path",{class:"fill-current",d:"M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"})],-1)],h={class:"space-x-2"},N=["onClick"],b={class:"font-bold text-3xl lg:text-4xl mb-10"},E=["innerHTML"];const v={__name:"Show",props:{post:Object},setup:function(e){var t=e,l=function(){r.Inertia.get("/blog",{category:t.post.category})},v=localStorage.getItem("locale");return function(t,r){var y=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(a.Fb),{title:t.$t("blog")},null,8,["title"]),(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("article",n,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("img",{src:e.post.thumbnail,alt:"",class:"rounded-xl"},null,8,i),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("span",p,(0,o.toDisplayString)(t.$t("author")),1),(0,o.createElementVNode)("h5",x,(0,o.toDisplayString)(e.post.author),1)])]),(0,o.createElementVNode)("p",u,[(0,o.createElementVNode)("time",null,(0,o.toDisplayString)(e.post.created_at),1)])]),(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",f,[(0,o.createVNode)(y,{href:t.route("blog.index"),class:"transition-colors duration-300 relative inline-flex items-center text-lg hover:text-lonestar-400"},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(),(0,o.createElementBlock)("svg",{width:"22",height:"22",viewBox:"0 0 22 22",class:(0,o.normalizeClass)(["mr-2","ar"===(0,o.unref)(v)?"transform rotate-180":""])},V,2)),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(t.$t("back to posts")),1)]})),_:1},8,["href"]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("a",{href:"#",onClick:(0,o.withModifiers)(l,["prevent"]),class:"px-3 py-1 border-2 border-lonestar-400 border-opacity-50 rounded-full text-lonestar-500 text-xs uppercase font-semibold",style:{"font-size":"10px"}},(0,o.toDisplayString)(e.post.category),9,N)])]),(0,o.createElementVNode)("h1",b,(0,o.toDisplayString)(e.post.title),1),(0,o.createElementVNode)("div",{innerHTML:e.post.body,class:"space-y-4 lg:text-lg leading-loose"},null,8,E)])])])],64)}}}}}]);