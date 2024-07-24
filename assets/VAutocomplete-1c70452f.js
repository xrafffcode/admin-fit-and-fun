import{m as we,u as Se,a as Ce,b as xe}from"./VSelect-8cde19f0.js";import{b as Ie,u as Me,V as te}from"./VTextField-fa88338a.js";import{p as re,r as R,A as S,l as B,aX as pe,bg as q,aw as Ae,C as Pe,g as _e,bd as De,z as E,D as Z,at as Ke,w as H,aB as ae,aN as Le,u as Re,c,L as Q,F as L,V as ue,bm as Oe,a7 as Te,I as Be,bs as Ee,a$ as ne}from"./index-31daaf16.js";import{f as Ne}from"./forwardRefs-5fcb3655.js";import{u as je,V as Ue,a as ze,b as oe}from"./VMenu-5921d0fa.js";import{m as $e,V as He}from"./VGrid-f9b7f30a.js";import{V as Qe}from"./VChip-c0dd9028.js";const We=(e,s,l)=>e==null||s==null?-1:e.toString().toLocaleLowerCase().indexOf(s.toString().toLocaleLowerCase()),Xe=re({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Ge(e,s,l){var x;const y=[],d=(l==null?void 0:l.default)??We,V=l!=null&&l.filterKeys?q(l.filterKeys):!1,b=Object.keys((l==null?void 0:l.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return y;e:for(let m=0;m<e.length;m++){const[w,M=w]=q(e[m]),r={},n={};let F=-1;if(s&&!(l!=null&&l.noFilter)){if(typeof w=="object"){const O=V||Object.keys(M);for(const I of O){const N=Ae(M,I),T=(x=l==null?void 0:l.customKeyFilter)==null?void 0:x[I];if(F=T?T(N,s,w):d(N,s,w),F!==-1&&F!==!1)T?r[I]=F:n[I]=F;else if((l==null?void 0:l.filterMode)==="every")continue e}}else F=d(w,s,w),F!==-1&&F!==!1&&(n.title=F);const p=Object.keys(n).length,A=Object.keys(r).length;if(!p&&!A||(l==null?void 0:l.filterMode)==="union"&&A!==b&&!p||(l==null?void 0:l.filterMode)==="intersection"&&(A!==b||!p))continue}y.push({index:m,matches:{...n,...r}})}return y}function Je(e,s,l,y){const d=R([]),V=R(new Map),b=S(()=>y!=null&&y.transform?B(s).map(m=>[m,y.transform(m)]):B(s));pe(()=>{const m=typeof l=="function"?l():B(l),w=typeof m!="string"&&typeof m!="number"?"":String(m),M=Ge(b.value,w,{customKeyFilter:{...e.customKeyFilter,...B(y==null?void 0:y.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),r=B(s),n=[],F=new Map;M.forEach(p=>{let{index:A,matches:O}=p;const I=r[A];n.push(I),F.set(I.value,O)}),d.value=n,V.value=F});function x(m){return V.value.get(m.value)}return{filteredItems:d,filteredMatches:V,getMatches:x}}function Ye(e,s,l){if(s==null)return e;if(Array.isArray(s))throw new Error("Multiple matches is not implemented");return typeof s=="number"&&~s?c(Q,null,[c("span",{class:"v-autocomplete__unmask"},[e.substr(0,s)]),c("span",{class:"v-autocomplete__mask"},[e.substr(s,l)]),c("span",{class:"v-autocomplete__unmask"},[e.substr(s+l)])]):e}const Ze=re({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Xe({filterKeys:["title"]}),...we(),...Pe(Ie({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:!1})},"VAutocomplete"),ol=_e()({name:"VAutocomplete",props:Ze(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:l}=s;const{t:y}=De(),d=R(),V=E(!1),b=E(!0),x=E(!1),m=R(),w=R(),M=Z(e,"menu"),r=S({get:()=>M.value,set:t=>{var a;M.value&&!t&&((a=m.value)!=null&&a.ΨopenChildren)||(M.value=t)}}),n=E(-1),F=S(()=>{var t;return(t=d.value)==null?void 0:t.color}),p=S(()=>r.value?e.closeText:e.openText),{items:A,transformIn:O,transformOut:I}=je(e),{textColorClasses:N,textColorStyles:T}=Ke(F),h=Z(e,"search",""),o=Z(e,"modelValue",[],t=>O(t===null?[null]:q(t)),t=>{const a=I(t);return e.multiple?a:a[0]??null}),ce=S(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:o.value.length),K=Me(),{filteredItems:W,getMatches:se}=Je(e,A,()=>b.value?"":h.value),C=S(()=>e.hideSelected?W.value.filter(t=>!o.value.some(a=>a.value===t.value)):W.value),j=S(()=>!!(e.chips||l.chip)),X=S(()=>j.value||!!l.selection),ie=S(()=>o.value.map(t=>t.props.value)),U=S(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&h.value===((a=C.value[0])==null?void 0:a.title))&&C.value.length>0&&!b.value&&!x.value}),G=S(()=>e.hideNoData&&!C.value.length||e.readonly||(K==null?void 0:K.isReadonly.value)),J=R(),{onListScroll:ve,onListKeydown:fe}=Se(J,d);function de(t){e.openOnClear&&(r.value=!0),h.value=""}function me(){G.value||(r.value=!0)}function he(t){G.value||(V.value&&(t.preventDefault(),t.stopPropagation()),r.value=!r.value)}function ge(t){var u,i,k;if(e.readonly||K!=null&&K.isReadonly.value)return;const a=d.value.selectionStart,v=o.value.length;if((n.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(r.value=!0),["Escape"].includes(t.key)&&(r.value=!1),U.value&&["Enter","Tab"].includes(t.key)&&P(C.value[0]),t.key==="ArrowDown"&&U.value&&((u=J.value)==null||u.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(t.key)){if(n.value<0){t.key==="Backspace"&&!h.value&&(n.value=v-1);return}const g=n.value,f=o.value[n.value];f&&!f.props.disabled&&P(f,!1),n.value=g>=v-1?v-2:g}if(t.key==="ArrowLeft"){if(n.value<0&&a>0)return;const g=n.value>-1?n.value-1:v-1;o.value[g]?n.value=g:(n.value=-1,d.value.setSelectionRange((i=h.value)==null?void 0:i.length,(k=h.value)==null?void 0:k.length))}if(t.key==="ArrowRight"){if(n.value<0)return;const g=n.value+1;o.value[g]?n.value=g:(n.value=-1,d.value.setSelectionRange(0,0))}}}function ye(t){if(ne(d.value,":autofill")||ne(d.value,":-webkit-autofill")){const a=A.value.find(v=>v.title===t.target.value);a&&P(a)}}function Ve(){var t;V.value&&(b.value=!0,(t=d.value)==null||t.focus())}function Fe(t){V.value=!0,setTimeout(()=>{x.value=!0})}function be(t){x.value=!1}function ke(t){(t==null||t===""&&!e.multiple)&&(o.value=[])}const Y=E(!1);function P(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const v=o.value.findIndex(i=>e.valueComparator(i.value,t.value)),u=a??!~v;if(~v){const i=u?[...o.value,t]:[...o.value];i.splice(v,1),o.value=i}else u&&(o.value=[...o.value,t]);e.clearOnSelect&&(h.value="")}else{const v=a!==!1;o.value=v?[t]:[],h.value=v&&!X.value?t.title:"",ae(()=>{r.value=!1,b.value=!0})}}return H(V,(t,a)=>{var v;t!==a&&(t?(Y.value=!0,h.value=e.multiple||X.value?"":String(((v=o.value.at(-1))==null?void 0:v.props.title)??""),b.value=!0,ae(()=>Y.value=!1)):(!e.multiple&&h.value==null?o.value=[]:U.value&&!x.value&&!o.value.some(u=>{let{value:i}=u;return i===C.value[0].value})&&P(C.value[0]),r.value=!1,h.value="",n.value=-1))}),H(h,t=>{!V.value||Y.value||(t&&(r.value=!0),b.value=!t)}),H(r,()=>{if(!e.hideSelected&&r.value&&o.value.length){const t=C.value.findIndex(a=>o.value.some(v=>a.value===v.value));Le&&window.requestAnimationFrame(()=>{var a;t>=0&&((a=w.value)==null||a.scrollToIndex(t))})}}),H(()=>e.items,(t,a)=>{r.value||V.value&&!a.length&&t.length&&(r.value=!0)}),Re(()=>{const t=!!(!e.hideNoData||C.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),a=o.value.length>0,v=te.filterProps(e);return c(te,L({ref:d},v,{modelValue:h.value,"onUpdate:modelValue":[u=>h.value=u,ke],focused:V.value,"onUpdate:focused":u=>V.value=u,validationValue:o.externalValue,counterValue:ce.value,dirty:a,onChange:ye,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":r.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!X.value,"v-autocomplete--selecting-index":n.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":de,"onMousedown:control":me,onKeydown:ge}),{...l,default:()=>c(Q,null,[c(Ue,L({ref:m,modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ve},e.menuProps),{default:()=>[t&&c(ze,L({ref:J,selected:ie.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:fe,onFocusin:Fe,onFocusout:be,onScrollPassive:ve,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var u,i,k;return[(u=l["prepend-item"])==null?void 0:u.call(l),!C.value.length&&!e.hideNoData&&(((i=l["no-data"])==null?void 0:i.call(l))??c(oe,{title:y(e.noDataText)},null)),c(Ce,{ref:w,renderless:!0,items:C.value},{default:g=>{var le;let{item:f,index:_,itemRef:D}=g;const ee=L(f.props,{ref:D,key:_,active:U.value&&_===0?!0:void 0,onClick:()=>P(f,null)});return((le=l.item)==null?void 0:le.call(l,{item:f,index:_,props:ee}))??c(oe,L(ee,{role:"option"}),{prepend:z=>{let{isSelected:$}=z;return c(Q,null,[e.multiple&&!e.hideSelected?c(xe,{key:f.value,modelValue:$,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&c(He,{image:f.props.prependAvatar},null),f.props.prependIcon&&c(ue,{icon:f.props.prependIcon},null)])},title:()=>{var z,$;return b.value?f.title:Ye(f.title,(z=se(f))==null?void 0:z.title,(($=h.value)==null?void 0:$.length)??0)}})}}),(k=l["append-item"])==null?void 0:k.call(l)]}})]}),o.value.map((u,i)=>{function k(D){D.stopPropagation(),D.preventDefault(),P(u,!1)}const g={"onClick:close":k,onMousedown(D){D.preventDefault(),D.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=j.value?!!l.chip:!!l.selection,_=f?Oe(j.value?l.chip({item:u,index:i,props:g}):l.selection({item:u,index:i})):void 0;if(!(f&&!_))return c("div",{key:u.value,class:["v-autocomplete__selection",i===n.value&&["v-autocomplete__selection--selected",N.value]],style:i===n.value?T.value:{}},[j.value?l.chip?c(Te,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[_]}):c(Qe,L({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},g),null):_??c("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&i<o.value.length-1&&c("span",{class:"v-autocomplete__selection-comma"},[Be(",")])])])})]),"append-inner":function(){var g;for(var u=arguments.length,i=new Array(u),k=0;k<u;k++)i[k]=arguments[k];return c(Q,null,[(g=l["append-inner"])==null?void 0:g.call(l,...i),e.menuIcon?c(ue,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:he,onClick:Ee,"aria-label":y(p.value),title:y(p.value)},null):void 0])}})}),Ne({isFocused:V,isPristine:b,menu:r,search:h,filteredItems:W,select:P},d)}});export{ol as V};
