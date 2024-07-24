import{c as I}from"./VGrid-f9b7f30a.js";import{p as $,a6 as L,m as z,aa as F,ab as R,ac as j,b6 as p,b7 as w,ad as E,a as O,af as M,ag as N,g as q,D as G,A as o,aj as H,al as J,am as K,an as Q,ao as U,b9 as W,ba as X,ap as Y,at as Z,x as ee,bd as ae,c as t,as as te,V as le,a7 as d,T as ne,F as se}from"./index-31daaf16.js";const oe=I("v-alert-title"),re=["success","info","warning","error"],ie=$({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:L,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...F(),...R(),...j(),...p(),...w(),...E(),...O(),...M(),...N({variant:"flat"})},"VAlert"),de=q()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=G(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=H(e),{colorClasses:f,colorStyles:k,variantClasses:V}=J(y),{densityClasses:P}=K(e),{dimensionStyles:C}=Q(e),{elevationClasses:g}=U(e),{locationStyles:x}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:A,textColorStyles:T}=Z(ee(e,"borderColor")),{t:B}=ae(),i=o(()=>({"aria-label":B(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),h=!!(a.title||e.title),D=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",A.value],style:T.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[h&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),D&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{de as V};
