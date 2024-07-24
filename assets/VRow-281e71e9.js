import{g as f,m as v,ay as de,u as S,c as s,p as k,a6 as g,aa as T,L as _,V as $,a7 as V,a9 as ce,ab as re,ac as ue,b5 as oe,b6 as fe,b7 as ve,ad as me,ae as ye,a as h,af as ge,ag as be,ah as ke,aj as Ce,ak as Ve,al as Se,am as he,an as Ae,ao as Ie,b8 as Pe,b9 as Le,ba as Ne,ap as je,ai as _e,A as b,M as $e,ar as we,bb as xe,as as Ee,bc as C,aE as A,h as p}from"./index-31daaf16.js";import{c as I,V as w,a as Te}from"./VGrid-f9b7f30a.js";const pe=f()({name:"VCardActions",props:v(),setup(e,l){let{slots:a}=l;return de({VBtn:{slim:!0,variant:"text"}}),S(()=>{var t;return s("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Be=I("v-card-subtitle"),Re=I("v-card-title"),Oe=k({appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:[String,Number],title:[String,Number],...v(),...T()},"VCardItem"),De=f()({name:"VCardItem",props:Oe(),setup(e,l){let{slots:a}=l;return S(()=>{var u;const t=!!(e.prependAvatar||e.prependIcon),n=!!(t||a.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||a.append),d=!!(e.title!=null||a.title),r=!!(e.subtitle!=null||a.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[n&&s("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?s(V,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):s(_,null,[e.prependAvatar&&s(w,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s($,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[d&&s(Re,{key:"title"},{default:()=>{var o;return[((o=a.title)==null?void 0:o.call(a))??e.title]}}),r&&s(Be,{key:"subtitle"},{default:()=>{var o;return[((o=a.subtitle)==null?void 0:o.call(a))??e.subtitle]}}),(u=a.default)==null?void 0:u.call(a)]),c&&s("div",{key:"append",class:"v-card-item__append"},[a.append?s(V,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):s(_,null,[e.appendIcon&&s($,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(w,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Me=I("v-card-text"),Ge=k({appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ce(),...v(),...T(),...re(),...ue(),...oe(),...fe(),...ve(),...me(),...ye(),...h(),...ge(),...be({variant:"elevated"})},"VCard"),Ze=f()({name:"VCard",directives:{Ripple:ke},props:Ge(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:n}=Ce(e),{borderClasses:i}=Ve(e),{colorClasses:c,colorStyles:d,variantClasses:r}=Se(e),{densityClasses:u}=he(e),{dimensionStyles:o}=Ae(e),{elevationClasses:H}=Ie(e),{loaderClasses:J}=Pe(e),{locationStyles:W}=Le(e),{positionClasses:Y}=Ne(e),{roundedClasses:q}=je(e),m=_e(e,a),Q=b(()=>e.link!==!1&&m.isLink.value),y=b(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return S(()=>{const X=Q.value?"a":e.tag,Z=!!(t.title||e.title!=null),ee=!!(t.subtitle||e.subtitle!=null),ae=Z||ee,te=!!(t.append||e.appendAvatar||e.appendIcon),ne=!!(t.prepend||e.prependAvatar||e.prependIcon),le=!!(t.image||e.image),se=ae||ne||te,ie=!!(t.text||e.text!=null);return $e(s(X,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},n.value,i.value,c.value,u.value,H.value,J.value,Y.value,q.value,r.value,e.class],style:[d.value,o.value,W.value,e.style],href:m.href.value,onClick:y.value&&m.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var N;return[le&&s("div",{key:"image",class:"v-card__image"},[t.image?s(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Te,{key:"image-img",cover:!0,src:e.image},null)]),s(xe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),se&&s(De,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ie&&s(Me,{key:"text"},{default:()=>{var j;return[((j=t.text)==null?void 0:j.call(t))??e.text]}}),(N=t.default)==null?void 0:N.call(t),t.actions&&s(pe,null,{default:t.actions}),Ee(y.value,"v-card")]}}),[[we("ripple"),y.value&&e.ripple]])}),{}}}),B=(()=>C.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}))(),R=(()=>C.reduce((e,l)=>{const a="offset"+A(l);return e[a]={type:[String,Number],default:null},e},{}))(),O=(()=>C.reduce((e,l)=>{const a="order"+A(l);return e[a]={type:[String,Number],default:null},e},{}))(),x={col:Object.keys(B),offset:Object.keys(R),order:Object.keys(O)};function Fe(e,l,a){let t=e;if(!(a==null||a===!1)){if(l){const n=l.replace(e,"");t+=`-${n}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const Ue=["auto","start","end","center","baseline","stretch"],Ke=k({cols:{type:[Boolean,String,Number],default:!1},...B,offset:{type:[String,Number],default:null},...R,order:{type:[String,Number],default:null},...O,alignSelf:{type:String,default:null,validator:e=>Ue.includes(e)},...v(),...h()},"VCol"),ea=f()({name:"VCol",props:Ke(),setup(e,l){let{slots:a}=l;const t=b(()=>{const n=[];let i;for(i in x)x[i].forEach(d=>{const r=e[d],u=Fe(i,d,r);u&&n.push(u)});const c=n.some(d=>d.startsWith("v-col-"));return n.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return p(e.tag,{class:[t.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}}),P=["start","end","center"],D=["space-between","space-around","space-evenly"];function L(e,l){return C.reduce((a,t)=>{const n=e+A(t);return a[n]=l(),a},{})}const ze=[...P,"baseline","stretch"],M=e=>ze.includes(e),G=L("align",()=>({type:String,default:null,validator:M})),He=[...P,...D],F=e=>He.includes(e),U=L("justify",()=>({type:String,default:null,validator:F})),Je=[...P,...D,"stretch"],K=e=>Je.includes(e),z=L("alignContent",()=>({type:String,default:null,validator:K})),E={align:Object.keys(G),justify:Object.keys(U),alignContent:Object.keys(z)},We={align:"align",justify:"justify",alignContent:"align-content"};function Ye(e,l,a){let t=We[e];if(a!=null){if(l){const n=l.replace(e,"");t+=`-${n}`}return t+=`-${a}`,t.toLowerCase()}}const qe=k({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:M},...G,justify:{type:String,default:null,validator:F},...U,alignContent:{type:String,default:null,validator:K},...z,...v(),...h()},"VRow"),aa=f()({name:"VRow",props:qe(),setup(e,l){let{slots:a}=l;const t=b(()=>{const n=[];let i;for(i in E)E[i].forEach(c=>{const d=e[c],r=Ye(i,c,d);r&&n.push(r)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return p(e.tag,{class:["v-row",t.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}});export{aa as V,ea as a,Ze as b,Re as c,Me as d,pe as e};