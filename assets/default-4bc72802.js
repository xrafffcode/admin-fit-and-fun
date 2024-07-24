import{p as pt,m as Rt,a as Xt,g as vt,u as mt,c as f,h as X,b as gt,r as H,d as rt,w as K,e as U,o as Y,f as A,i as y,j as M,k as C,t as E,l as W,n as bt,q as yt,s as xt,v as wt,x as Ht,y as At,z as kt,A as V,B as Et,C as Pt,D as Mt,E as Vt,F as nt,G as Nt,V as B,H as _t,I as F,J as et,K as I,L as J,M as Ct,N as It,O as Ot}from"./index-31daaf16.js";import{m as Dt,u as Bt,V as lt}from"./VOverlay-4d5b6a7d.js";import{f as $t}from"./forwardRefs-5fcb3655.js";import{V as Ft,a as Kt,b as ot,c as at,d as Ut,e as qt}from"./VMenu-5921d0fa.js";import{c as jt,V as st}from"./VGrid-f9b7f30a.js";import{c as tt}from"./permissionHelper-2b543738.js";const zt=jt("v-spacer","div","VSpacer"),Gt=pt({start:Boolean,end:Boolean,...Rt(),...Xt()},"VListItemAction"),Jt=vt()({name:"VListItemAction",props:Gt(),setup(t,e){let{slots:r}=e;return mt(()=>f(t.tag,{class:["v-list-item-action",{"v-list-item-action--start":t.start,"v-list-item-action--end":t.end},t.class],style:t.style},r)),{}}});/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function x(t){return getComputedStyle(t)}function T(t,e){for(var r in e){var n=e[r];typeof n=="number"&&(n=n+"px"),t.style[r]=n}return t}function z(t){var e=document.createElement("div");return e.className=t,e}var it=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function P(t,e){if(!it)throw new Error("No element matching method supported");return it.call(t,e)}function D(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function ct(t,e){return Array.prototype.filter.call(t.children,function(r){return P(r,e)})}var _={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Lt={x:null,y:null};function Yt(t,e){var r=t.element.classList,n=_.state.scrolling(e);r.contains(n)?clearTimeout(Lt[e]):r.add(n)}function Tt(t,e){Lt[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(_.state.scrolling(e))},t.settings.scrollingThreshold)}function Qt(t,e){Yt(t,e),Tt(t,e)}var q=function(e){this.element=e,this.handlers={}},Wt={isEmpty:{configurable:!0}};q.prototype.bind=function(e,r){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(r),this.element.addEventListener(e,r,!1)};q.prototype.unbind=function(e,r){var n=this;this.handlers[e]=this.handlers[e].filter(function(a){return r&&a!==r?!0:(n.element.removeEventListener(e,a,!1),!1)})};q.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};Wt.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(q.prototype,Wt);var $=function(){this.eventElements=[]};$.prototype.eventElement=function(e){var r=this.eventElements.filter(function(n){return n.element===e})[0];return r||(r=new q(e),this.eventElements.push(r)),r};$.prototype.bind=function(e,r,n){this.eventElement(e).bind(r,n)};$.prototype.unbind=function(e,r,n){var a=this.eventElement(e);a.unbind(r,n),a.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(a),1)};$.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};$.prototype.once=function(e,r,n){var a=this.eventElement(e),i=function(o){a.unbind(r,i),n(o)};a.bind(r,i)};function G(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function Q(t,e,r,n,a){n===void 0&&(n=!0),a===void 0&&(a=!1);var i;if(e==="top")i=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")i=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");Zt(t,r,i,n,a)}function Zt(t,e,r,n,a){var i=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5];n===void 0&&(n=!0),a===void 0&&(a=!1);var v=t.element;t.reach[l]=null,v[s]<1&&(t.reach[l]="start"),v[s]>t[i]-t[o]-1&&(t.reach[l]="end"),e&&(v.dispatchEvent(G("ps-scroll-"+l)),e<0?v.dispatchEvent(G("ps-scroll-"+c)):e>0&&v.dispatchEvent(G("ps-scroll-"+u)),n&&Qt(t,l)),t.reach[l]&&(e||a)&&v.dispatchEvent(G("ps-"+l+"-reach-"+t.reach[l]))}function w(t){return parseInt(t,10)||0}function te(t){return P(t,"input,[contenteditable]")||P(t,"select,[contenteditable]")||P(t,"textarea,[contenteditable]")||P(t,"button,[contenteditable]")}function ee(t){var e=x(t);return w(e.width)+w(e.paddingLeft)+w(e.paddingRight)+w(e.borderLeftWidth)+w(e.borderRightWidth)}var O={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function k(t){var e=t.element,r=Math.floor(e.scrollTop),n=e.getBoundingClientRect();t.containerWidth=Math.round(n.width),t.containerHeight=Math.round(n.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(ct(e,_.element.rail("x")).forEach(function(a){return D(a)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(ct(e,_.element.rail("y")).forEach(function(a){return D(a)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=ut(t,w(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=w((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=ut(t,w(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=w(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),re(e,t),t.scrollbarXActive?e.classList.add(_.state.active("x")):(e.classList.remove(_.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(_.state.active("y")):(e.classList.remove(_.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function ut(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function re(t,e){var r={width:e.railXWidth},n=Math.floor(t.scrollTop);e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-n:r.top=e.scrollbarXTop+n,T(e.scrollbarXRail,r);var a={top:n,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,T(e.scrollbarYRail,a),T(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),T(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function ne(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,n=r>t.scrollbarYTop?1:-1;t.element.scrollTop+=n*t.containerHeight,k(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,n=r>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=n*t.containerWidth,k(t),e.stopPropagation()})}function le(t){ht(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),ht(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function ht(t,e){var r=e[0],n=e[1],a=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],v=t.element,p=null,g=null,h=null;function d(m){m.touches&&m.touches[0]&&(m[a]=m.touches[0].pageY),v[l]=p+h*(m[a]-g),Yt(t,c),k(t),m.stopPropagation(),m.type.startsWith("touch")&&m.changedTouches.length>1&&m.preventDefault()}function L(){Tt(t,c),t[u].classList.remove(_.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",d)}function b(m,S){p=v[l],S&&m.touches&&(m[a]=m.touches[0].pageY),g=m[a],h=(t[n]-t[r])/(t[i]-t[s]),S?t.event.bind(t.ownerDocument,"touchmove",d):(t.event.bind(t.ownerDocument,"mousemove",d),t.event.once(t.ownerDocument,"mouseup",L),m.preventDefault()),t[u].classList.add(_.state.clicking),m.stopPropagation()}t.event.bind(t[o],"mousedown",function(m){b(m)}),t.event.bind(t[o],"touchstart",function(m){b(m,!0)})}function oe(t){var e=t.element,r=function(){return P(e,":hover")},n=function(){return P(t.scrollbarX,":focus")||P(t.scrollbarY,":focus")};function a(i,o){var s=Math.floor(e.scrollTop);if(i===0){if(!t.scrollbarYActive)return!1;if(s===0&&o>0||s>=t.contentHeight-t.containerHeight&&o<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(o===0){if(!t.scrollbarXActive)return!1;if(l===0&&i<0||l>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&!(!r()&&!n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if(o.tagName==="IFRAME")o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(te(o))return}var s=0,l=0;switch(i.which){case 37:i.metaKey?s=-t.contentWidth:i.altKey?s=-t.containerWidth:s=-30;break;case 38:i.metaKey?l=t.contentHeight:i.altKey?l=t.containerHeight:l=30;break;case 39:i.metaKey?s=t.contentWidth:i.altKey?s=t.containerWidth:s=30;break;case 40:i.metaKey?l=-t.contentHeight:i.altKey?l=-t.containerHeight:l=-30;break;case 32:i.shiftKey?l=t.containerHeight:l=-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&s!==0||t.settings.suppressScrollY&&l!==0||(e.scrollTop-=l,e.scrollLeft+=s,k(t),a(s,l)&&i.preventDefault())}})}function ae(t){var e=t.element;function r(o,s){var l=Math.floor(e.scrollTop),c=e.scrollTop===0,u=l+e.offsetHeight===e.scrollHeight,v=e.scrollLeft===0,p=e.scrollLeft+e.offsetWidth===e.scrollWidth,g;return Math.abs(s)>Math.abs(o)?g=c||u:g=v||p,g?!t.settings.wheelPropagation:!0}function n(o){var s=o.deltaX,l=-1*o.deltaY;return(typeof s>"u"||typeof l>"u")&&(s=-1*o.wheelDeltaX/6,l=o.wheelDeltaY/6),o.deltaMode&&o.deltaMode===1&&(s*=10,l*=10),s!==s&&l!==l&&(s=0,l=o.wheelDelta),o.shiftKey?[-l,-s]:[s,l]}function a(o,s,l){if(!O.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(o))return!1;for(var c=o;c&&c!==e;){if(c.classList.contains(_.element.consuming))return!0;var u=x(c);if(l&&u.overflowY.match(/(scroll|auto)/)){var v=c.scrollHeight-c.clientHeight;if(v>0&&(c.scrollTop>0&&l<0||c.scrollTop<v&&l>0))return!0}if(s&&u.overflowX.match(/(scroll|auto)/)){var p=c.scrollWidth-c.clientWidth;if(p>0&&(c.scrollLeft>0&&s<0||c.scrollLeft<p&&s>0))return!0}c=c.parentNode}return!1}function i(o){var s=n(o),l=s[0],c=s[1];if(!a(o.target,l,c)){var u=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,u=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,u=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),k(t),u=u||r(l,c),u&&!o.ctrlKey&&(o.stopPropagation(),o.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",i):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",i)}function se(t){if(!O.supportsTouch&&!O.supportsIePointer)return;var e=t.element;function r(h,d){var L=Math.floor(e.scrollTop),b=e.scrollLeft,m=Math.abs(h),S=Math.abs(d);if(S>m){if(d<0&&L===t.contentHeight-t.containerHeight||d>0&&L===0)return window.scrollY===0&&d>0&&O.isChrome}else if(m>S&&(h<0&&b===t.contentWidth-t.containerWidth||h>0&&b===0))return!0;return!0}function n(h,d){e.scrollTop-=d,e.scrollLeft-=h,k(t)}var a={},i=0,o={},s=null;function l(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return h.pointerType&&h.pointerType==="pen"&&h.buttons===0?!1:!!(h.targetTouches&&h.targetTouches.length===1||h.pointerType&&h.pointerType!=="mouse"&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE)}function u(h){if(c(h)){var d=l(h);a.pageX=d.pageX,a.pageY=d.pageY,i=new Date().getTime(),s!==null&&clearInterval(s)}}function v(h,d,L){if(!e.contains(h))return!1;for(var b=h;b&&b!==e;){if(b.classList.contains(_.element.consuming))return!0;var m=x(b);if(L&&m.overflowY.match(/(scroll|auto)/)){var S=b.scrollHeight-b.clientHeight;if(S>0&&(b.scrollTop>0&&L<0||b.scrollTop<S&&L>0))return!0}if(d&&m.overflowX.match(/(scroll|auto)/)){var N=b.scrollWidth-b.clientWidth;if(N>0&&(b.scrollLeft>0&&d<0||b.scrollLeft<N&&d>0))return!0}b=b.parentNode}return!1}function p(h){if(c(h)){var d=l(h),L={pageX:d.pageX,pageY:d.pageY},b=L.pageX-a.pageX,m=L.pageY-a.pageY;if(v(h.target,b,m))return;n(b,m),a=L;var S=new Date().getTime(),N=S-i;N>0&&(o.x=b/N,o.y=m/N,i=S),r(b,m)&&h.preventDefault()}}function g(){t.settings.swipeEasing&&(clearInterval(s),s=setInterval(function(){if(t.isInitialized){clearInterval(s);return}if(!o.x&&!o.y){clearInterval(s);return}if(Math.abs(o.x)<.01&&Math.abs(o.y)<.01){clearInterval(s);return}if(!t.element){clearInterval(s);return}n(o.x*30,o.y*30),o.x*=.8,o.y*=.8},10))}O.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",p),t.event.bind(e,"touchend",g)):O.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",p),t.event.bind(e,"pointerup",g)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",p),t.event.bind(e,"MSPointerUp",g)))}var ie=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},ce={"click-rail":ne,"drag-thumb":le,keyboard:oe,wheel:ae,touch:se},j=function(e,r){var n=this;if(r===void 0&&(r={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(_.main),this.settings=ie();for(var a in r)this.settings[a]=r[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i=function(){return e.classList.add(_.state.focus)},o=function(){return e.classList.remove(_.state.focus)};this.isRtl=x(e).direction==="rtl",this.isRtl===!0&&e.classList.add(_.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=c,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new $,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=z(_.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=z(_.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",i),this.event.bind(this.scrollbarX,"blur",o),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var s=x(this.scrollbarXRail);this.scrollbarXBottom=parseInt(s.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=w(s.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=w(s.borderLeftWidth)+w(s.borderRightWidth),T(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=w(s.marginLeft)+w(s.marginRight),T(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=z(_.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=z(_.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",i),this.event.bind(this.scrollbarY,"blur",o),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=x(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=w(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?ee(this.scrollbarY):null,this.railBorderYWidth=w(l.borderTopWidth)+w(l.borderBottomWidth),T(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=w(l.marginTop)+w(l.marginBottom),T(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return ce[c](n)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),k(this)};j.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,T(this.scrollbarXRail,{display:"block"}),T(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=w(x(this.scrollbarXRail).marginLeft)+w(x(this.scrollbarXRail).marginRight),this.railYMarginHeight=w(x(this.scrollbarYRail).marginTop)+w(x(this.scrollbarYRail).marginBottom),T(this.scrollbarXRail,{display:"none"}),T(this.scrollbarYRail,{display:"none"}),k(this),Q(this,"top",0,!1,!0),Q(this,"left",0,!1,!0),T(this.scrollbarXRail,{display:""}),T(this.scrollbarYRail,{display:""}))};j.prototype.onScroll=function(e){this.isAlive&&(k(this),Q(this,"top",this.element.scrollTop-this.lastScrollTop),Q(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};j.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),D(this.scrollbarX),D(this.scrollbarY),D(this.scrollbarXRail),D(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};j.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const dt=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var ue={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:dt,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new j(this.$el,this.options),dt.forEach(t=>{this.ps.element.addEventListener(t,e=>this.$emit(t,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return X(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const he={class:"nav-header"},de={class:"leading-normal"},fe=M("div",{class:"vertical-nav-items-shadow"},null,-1),pe={__name:"VerticalNav",props:{tag:{type:[String,null],required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const e=t,{mdAndDown:r}=gt(),n=H(),a=rt();K(()=>a.path,()=>{e.toggleIsOverlayNavActive(!1)});const i=H(!1),o=c=>i.value=c,s=c=>{i.value=c.target.scrollTop>0},l="Fit And Fun";return(c,u)=>{const v=U("RouterLink");return Y(),A(yt(e.tag),{ref_key:"refNav",ref:n,class:bt(["layout-vertical-nav",[{visible:t.isOverlayNavActive,scrolled:W(i),"overlay-nav":W(r)}]])},{default:y(()=>[M("div",he,[C(c.$slots,"nav-header",{},()=>[f(v,{to:"/",class:"app-logo d-flex align-center gap-x-3 app-title-wrapper"},{default:y(()=>[M("h1",de,E(W(l)),1)]),_:1})])]),C(c.$slots,"before-nav-items",{},()=>[fe]),C(c.$slots,"nav-items",{updateIsVerticalNavScrolled:o},()=>[f(W(ue),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:s},{default:y(()=>[C(c.$slots,"default")]),_:3})]),C(c.$slots,"after-nav-items")]),_:3},8,["class"])}}};function Z(t){return typeof t=="function"?t():W(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ve=()=>{};function me(t,e){function r(...n){return new Promise((a,i)=>{Promise.resolve(t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(a).catch(i)})}return r}const St=t=>t();function ge(t=St){const e=H(!0);function r(){e.value=!1}function n(){e.value=!0}const a=(...i)=>{e.value&&t(...i)};return{isActive:wt(e),pause:r,resume:n,eventFilter:a}}function be(...t){if(t.length!==1)return Ht(...t);const e=t[0];return typeof e=="function"?wt(At(()=>({get:e,set:ve}))):H(e)}function ye(t,e,r={}){const{eventFilter:n=St,...a}=r;return K(t,me(n,e),a)}function ft(t,e,r={}){const{eventFilter:n,...a}=r,{eventFilter:i,pause:o,resume:s,isActive:l}=ge(n);return{stop:ye(t,e,{...a,eventFilter:i}),pause:o,resume:s,isActive:l}}function we(t,e,...[r]){const{flush:n="sync",deep:a=!1,immediate:i=!0,direction:o="both",transform:s={}}=r||{},l=[],c="ltr"in s&&s.ltr||(p=>p),u="rtl"in s&&s.rtl||(p=>p);return(o==="both"||o==="ltr")&&l.push(ft(t,p=>{l.forEach(g=>g.pause()),e.value=c(p),l.forEach(g=>g.resume())},{flush:n,deep:a,immediate:i})),(o==="both"||o==="rtl")&&l.push(ft(e,p=>{l.forEach(g=>g.pause()),t.value=u(p),l.forEach(g=>g.resume())},{flush:n,deep:a,immediate:i})),()=>{l.forEach(p=>p.stop())}}function _e(t=!1,e={}){const{truthyValue:r=!0,falsyValue:n=!1}=e,a=xt(t),i=H(t);function o(s){if(arguments.length)return i.value=s,i.value;{const l=Z(r);return i.value=i.value===l?Z(n):l,i.value}}return a?o:[i,o]}function Le(t,e){const r=kt(c()),n=be(t),a=V({get(){var u;const v=n.value;let p=e!=null&&e.getIndexOf?e.getIndexOf(r.value,v):v.indexOf(r.value);return p<0&&(p=(u=e==null?void 0:e.fallbackIndex)!=null?u:0),p},set(u){i(u)}});function i(u){const v=n.value,p=v.length,g=(u%p+p)%p,h=v[g];return r.value=h,h}function o(u=1){return i(a.value+u)}function s(u=1){return o(u)}function l(u=1){return o(-u)}function c(){var u,v;return(v=Z((u=e==null?void 0:e.initialValue)!=null?u:Z(t)[0]))!=null?v:void 0}return K(n,()=>i(a.value)),{state:r,index:a,next:s,prev:l,go:i}}const Ye=Et({setup(t,{slots:e}){const r=H(!1),n=H(!1),a=_e(r),i=rt(),{mdAndDown:o}=gt();return we(r,n),()=>{var p,g,h;const s=X(pe,{isOverlayNavActive:r.value,toggleIsOverlayNavActive:a},{"nav-header":()=>{var d;return(d=e["vertical-nav-header"])==null?void 0:d.call(e)},"before-nav-items":()=>{var d;return(d=e["before-vertical-nav-items"])==null?void 0:d.call(e)},default:()=>{var d;return(d=e["vertical-nav-content"])==null?void 0:d.call(e)},"after-nav-items":()=>{var d;return(d=e["after-vertical-nav-items"])==null?void 0:d.call(e)}}),l=X("header",{class:["layout-navbar navbar-blur"]},[X("div",{class:"navbar-content-container"},(p=e.navbar)==null?void 0:p.call(e,{toggleVerticalOverlayNavActive:a}))]),c=X("main",{class:"layout-page-content"},X("div",{class:"page-content-container"},(g=e.default)==null?void 0:g.call(e))),u=X("footer",{class:"layout-footer"},[X("div",{class:"footer-content-container"},(h=e.footer)==null?void 0:h.call(e))]),v=X("div",{class:["layout-overlay",{visible:n.value}],onClick:()=>{n.value=!n.value}});return X("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",o.value&&"layout-overlay-nav",i.meta.layoutWrapperClasses]},[s,X("div",{class:"layout-content-wrapper"},[l,c,u]),v])}}});const Te=pt({id:String,text:String,...Pt(Dt({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),We=vt()({name:"VTooltip",props:Te(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:r}=e;const n=Mt(t,"modelValue"),{scopeId:a}=Bt(),i=Vt(),o=V(()=>t.id||`v-tooltip-${i}`),s=H(),l=V(()=>t.location.split(" ").length>1?t.location:t.location+" center"),c=V(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),u=V(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),v=V(()=>nt({"aria-describedby":o.value},t.activatorProps));return mt(()=>{const p=lt.filterProps(t);return f(lt,nt({ref:s,class:["v-tooltip",t.class],style:t.style,id:o.value},p,{modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,transition:u.value,absolute:!0,location:l.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:v.value,_disableGlobalStack:!0},a),{activator:r.activator,default:function(){var L;for(var g=arguments.length,h=new Array(g),d=0;d<g;d++)h[d]=arguments[d];return((L=r.default)==null?void 0:L.call(r,...h))??t.text}})}),$t({},s)}}),Se={class:"text-capitalize"},Re={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(t){const e=t,{name:r,global:n}=Nt(),{state:a,next:i,index:o}=Le(e.themes.map(l=>l.name),{initialValue:r}),s=()=>{n.name.value=i()};return K(()=>n.name.value,l=>{a.value=l}),(l,c)=>{const u=U("IconBtn");return Y(),A(u,{onClick:s},{default:y(()=>[f(B,{icon:e.themes[W(o)].icon},null,8,["icon"]),f(We,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:y(()=>[M("span",Se,E(W(a)),1)]),_:1})]),_:1})}}},Xe={__name:"NavbarThemeSwitcher",setup(t){const e=[{name:"light",icon:"bx-sun"},{name:"dark",icon:"bx-moon"}];return(r,n)=>{const a=Re;return Y(),A(a,{themes:e})}}},xe={__name:"UserProfile",setup(t){const{user:e,logout:r,checkAuth:n}=_t(),a=()=>{r()};return n(),(i,o)=>(Y(),A(st,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:y(()=>{var s;return[F(E((s=W(e))==null?void 0:s.email.charAt(0))+" ",1),f(Ft,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:y(()=>[f(Kt,null,{default:y(()=>[f(ot,null,{prepend:y(()=>[f(Jt,{start:""},{default:y(()=>[f(st,{color:"primary",variant:"tonal"},{default:y(()=>{var l;return[F(E((l=W(e))==null?void 0:l.email.charAt(0)),1)]}),_:1})]),_:1})]),default:y(()=>{var l;return[f(at,{class:"font-weight-semibold"},{default:y(()=>{var c;return[F(E((c=W(e))==null?void 0:c.email),1)]}),_:1}),((l=W(e))==null?void 0:l.role)==="coach"?(Y(),A(Ut,{key:0},{default:y(()=>{var c;return[F(" ID Herbalife: "+E((c=W(e))==null?void 0:c.id_herbalife),1)]}),_:1})):et("",!0)]}),_:1}),f(qt,{class:"my-2"}),f(ot,{onClick:a},{prepend:y(()=>[f(B,{class:"me-2",icon:"bx-log-out",size:"22"})]),default:y(()=>[f(at,null,{default:y(()=>[F("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]}),_:1}))}};const He={class:"nav-link"},Ae={class:"nav-item-title"},ke={class:"nav-item-title"},Ee={class:"nav-sub-items"},R={__name:"VerticalNavLink",props:{item:{type:Object,required:!0}},setup(t){const e=t,r=rt(),n=H(!1),a=()=>{n.value=!n.value},i=V(()=>e.item.children?e.item.children.filter(o=>tt(o.permission)):[]);return K(()=>r.path,()=>{e.item.children&&(n.value=e.item.children.some(o=>o.to===r.path))}),e.item.children&&(n.value=e.item.children.some(o=>o.to===r.path)),(o,s)=>{const l=U("VerticalNavLink",!0);return Y(),I("li",He,[t.item.children?(Y(),I(J,{key:1},[W(tt)(t.item.permission)?(Y(),I("a",{key:0,class:"nav-item",onClick:a},[f(B,{icon:t.item.icon,class:"nav-item-icon"},null,8,["icon"]),M("span",ke,E(t.item.title),1),f(B,{icon:n.value?"bx-chevron-up":"bx-chevron-down",class:"nav-item-icon"},null,8,["icon"])])):et("",!0),Ct(M("ul",Ee,[(Y(!0),I(J,null,Ot(i.value,c=>(Y(),A(l,{key:c.title,item:c},null,8,["item"]))),128))],512),[[It,n.value]])],64)):(Y(),I(J,{key:0},[W(tt)(t.item.permission)?(Y(),A(yt(t.item.to?"RouterLink":"a"),{key:0,to:t.item.to,href:t.item.href,class:bt(["nav-item",{disabled:t.item.disable}])},{default:y(()=>[f(B,{icon:t.item.icon,class:"nav-item-icon"},null,8,["icon"]),M("span",Ae,E(t.item.title),1)]),_:1},8,["to","href","class"])):et("",!0)],64))])}}},Pe={__name:"Menu",setup(t){const{checkAuth:e}=_t();return e(),(r,n)=>(Y(),I(J,null,[f(R,{item:{title:"Dashboard",icon:"bx-home",to:"/app/dashboard",permission:"dashboard"}}),f(R,{item:{title:"Exercise",icon:"bx-layer",to:"/app/exercise",permission:"program-list"}}),f(R,{item:{title:"Program",icon:"bx-target-lock",to:"/app/program",permission:"goal-list"}}),f(R,{item:{title:"Shake",icon:"bx-drink",to:"/app/shake",permission:"shake-list"}}),f(R,{item:{title:"Attendance",icon:"bx-check-square",to:"/app/attendance",permission:"attendance-list"}}),f(R,{item:{title:"Trial Applicant",icon:"bx-user-check",to:"/app/trial-applicant",permission:"trial-applicant-list"}}),f(R,{item:{title:"Membership",icon:"bx-id-card",to:"/app/membership",permission:"membership-list"}}),f(R,{item:{title:"Member Progress",icon:"bx-trophy",to:"/app/member-progress",permission:"member-progress-list"}}),f(R,{item:{title:"Testimonial",icon:"bx-message-detail",to:"/app/testimonial",permission:"testimonial-list"}}),f(R,{item:{title:"User Management",icon:"bx-user",permission:"user-management",children:[{title:"Coach",to:"/app/coach",permission:"coach-list"},{title:"Admin",to:"/app/admin",permission:"admin-list"},{title:"Member",to:"/app/member",permission:"member-list"},{title:"Role",to:"/app/role",permission:"role-list"},{title:"Permission",to:"/app/permission",permission:"permission-list"}]}}),f(R,{item:{title:"Web Configuration",icon:"bx-cog",to:"/app/web-configuration",permission:"web-configuration-list"}})],64))}};const Me=(t,e)=>{const r=t.__vccOpts||t;for(const[n,a]of e)r[n]=a;return r},Ve={class:"d-flex h-100 align-center"},Ne={__name:"DefaultLayoutWithVerticalNav",setup(t){return(e,r)=>{const n=U("IconBtn");return Y(),A(Ye,null,{navbar:y(({toggleVerticalOverlayNavActive:a})=>[M("div",Ve,[f(n,{class:"ms-n3 d-lg-none",onClick:i=>a(!0)},{default:y(()=>[f(B,{icon:"bx-menu"})]),_:2},1032,["onClick"]),f(zt),f(Xe,{class:"me-2"}),f(xe)])]),"vertical-nav-content":y(()=>[f(Pe)]),default:y(()=>[C(e.$slots,"default",{},void 0,!0)]),_:3})}}},Ce=Me(Ne,[["__scopeId","data-v-00d1bf4b"]]);const Ke={__name:"default",setup(t){return(e,r)=>{const n=U("RouterView");return Y(),A(Ce,null,{default:y(()=>[f(n)]),_:1})}}};export{Ke as default};
