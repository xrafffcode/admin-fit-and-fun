import{P as v,r as g,Q as w,o as b,f as A,i as a,c as e,T as m,I as n,U as x,l as o,j as y}from"./index-31daaf16.js";import{u as c}from"./admin-fda973f8.js";import{a as t,b as B,V as f}from"./VRow-281e71e9.js";import{V as N}from"./VForm-27224658.js";import{V as u}from"./VTextField-fa88338a.js";import"./VGrid-f9b7f30a.js";import"./forwardRefs-5fcb3655.js";const h=y("h2",{class:"mb-0"}," Add Admin ",-1),F={__name:"create",setup(k){const{loading:p,error:l}=v(c()),{createAdmin:_}=c(),s=g({name:"",email:""}),i=()=>{s.value={name:"",email:""}},V=()=>{_(s.value)};return w(()=>{document.title="Add Admin",i(),l.value=null}),(C,r)=>(b(),A(f,null,{default:a(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[h,e(m,{to:{name:"admins"},color:"primary"},{default:a(()=>[n(" Back ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:a(()=>[e(B,null,{default:a(()=>[e(N,{onSubmit:x(V,["prevent"])},{default:a(()=>[e(f,null,{default:a(()=>[e(t,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:s.value.name,"onUpdate:modelValue":r[0]||(r[0]=d=>s.value.name=d),label:"Name",placeholder:"Admin Name","error-messages":o(l)&&o(l).name?[o(l).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:s.value.email,"onUpdate:modelValue":r[1]||(r[1]=d=>s.value.email=d),label:"Email",placeholder:"Admin Email","error-messages":o(l)&&o(l).email?[o(l).email]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:s.value.password,"onUpdate:modelValue":r[2]||(r[2]=d=>s.value.password=d),label:"Password",placeholder:"Admin Password","error-messages":o(l)&&o(l).password?[o(l).password]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(m,{type:"submit",loading:o(p),color:"primary"},{default:a(()=>[n(" Save ")]),_:1},8,["loading"]),e(m,{color:"secondary",variant:"tonal",onClick:i},{default:a(()=>[n(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{F as default};