import{P as x,H as p,r as f,S as y,o as c,K as h,l as s,f as C,i as l,s as S,J as B,j as i,c as a,L as T,I as u,t as V,T as _,U as N}from"./index-31daaf16.js";import{V as U}from"./VDialog-3bd3c4ef.js";import{b as v,d,e as j,V as F,a as w}from"./VRow-281e71e9.js";import{V as L}from"./VForm-27224658.js";import{V as g}from"./VTextField-fa88338a.js";import"./VOverlay-4d5b6a7d.js";import"./forwardRefs-5fcb3655.js";import"./VGrid-f9b7f30a.js";const M={class:"auth-wrapper d-flex align-center justify-center pa-4"},P=i("h5",{class:"text-h5 mb-1"}," Selamat datang! ",-1),R=i("p",{class:"mb-0"}," Masuk ke akun anda ",-1),z={__name:"login",setup(A){const{loading:m,error:e}=x(p()),{login:b}=p(),t=f({email:"",password:""}),n=f(!1),k=()=>{b(t.value)};return y(()=>{e.value=null,m.value=!1}),(D,o)=>(c(),h(T,null,[s(e)&&!s(e).email&&!s(e).password?(c(),C(U,{key:0,modelValue:s(e),"onUpdate:modelValue":o[1]||(o[1]=r=>S(e)?e.value=r:null),width:"auto"},{default:l(()=>[a(v,null,{default:l(()=>[a(d,null,{default:l(()=>[u(V(s(e)),1)]),_:1}),a(j,null,{default:l(()=>[a(_,{color:"primary",block:"",onClick:o[0]||(o[0]=r=>(e.value=!1,t.value.email="",t.value.password=""))},{default:l(()=>[u(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):B("",!0),i("div",M,[a(v,{class:"auth-card pa-2 pt-7",width:"448"},{default:l(()=>[a(d,{class:"pt-2"},{default:l(()=>[P,R]),_:1}),a(d,null,{default:l(()=>[a(L,{onSubmit:N(k,["prevent"])},{default:l(()=>[a(F,null,{default:l(()=>[a(w,{cols:"12"},{default:l(()=>[a(g,{modelValue:t.value.email,"onUpdate:modelValue":o[2]||(o[2]=r=>t.value.email=r),autofocus:"",placeholder:"johndoe@email.com",label:"Email",type:"email","error-messages":s(e)&&s(e).email?[s(e).email]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(w,{cols:"12"},{default:l(()=>[a(g,{modelValue:t.value.password,"onUpdate:modelValue":o[3]||(o[3]=r=>t.value.password=r),label:"Password",placeholder:"············",type:n.value?"text":"password","append-inner-icon":n.value?"bx-hide":"bx-show","error-messages":s(e)&&s(e).password?[s(e).password]:[],"onClick:appendInner":o[4]||(o[4]=r=>n.value=!n.value)},null,8,["modelValue","type","append-inner-icon","error-messages"]),a(_,{block:"",type:"submit",class:"mt-4"},{default:l(()=>[u(V(s(m)?"Loading...":"Login"),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])],64))}};export{z as default};
