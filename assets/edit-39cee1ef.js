import{d as A,P as x,r as h,Q as B,o as N,f as R,i as a,c as e,T as n,I as i,U as k,l,j as C}from"./index-31daaf16.js";import{u as f}from"./admin-fda973f8.js";import{a as d,b as E,V as _}from"./VRow-281e71e9.js";import{V as S}from"./VForm-27224658.js";import{V as u}from"./VTextField-fa88338a.js";import"./VGrid-f9b7f30a.js";import"./forwardRefs-5fcb3655.js";const T=C("h2",{class:"mb-0"}," Edit Admin ",-1),q={__name:"edit",setup(U){const V=A(),{loading:w,error:s}=x(f()),{fetchAdmin:v,updateAdmin:g}=f(),c=V.params.id,o=h({id:c,name:"",email:"",password:""}),p=async()=>{try{const t=await v(c);o.value={id:t.id,name:t.name,email:t.user.email,password:t.password}}catch(t){console.error(t)}};B(()=>{document.title="Edit Admin",p()});const y=()=>{g(o.value)},b=()=>{p()};return(t,r)=>(N(),R(_,null,{default:a(()=>[e(d,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[T,e(n,{to:{name:"admins"},color:"primary"},{default:a(()=>[i(" Back ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(E,null,{default:a(()=>[e(S,{onSubmit:k(y,["prevent"])},{default:a(()=>[e(_,null,{default:a(()=>[e(d,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:o.value.name,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value.name=m),label:"Name",placeholder:"Admin Name","error-messages":l(s)&&l(s).name?[l(s).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:o.value.email,"onUpdate:modelValue":r[1]||(r[1]=m=>o.value.email=m),label:"Email",placeholder:"Admin Email","error-messages":l(s)&&l(s).email?[l(s).email]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:o.value.password,"onUpdate:modelValue":r[2]||(r[2]=m=>o.value.password=m),label:"Password",placeholder:"Admin Password","error-messages":l(s)&&l(s).password?[l(s).password]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(n,{type:"submit",loading:l(w),color:"primary"},{default:a(()=>[i(" Save ")]),_:1},8,["loading"]),e(n,{type:"reset",color:"secondary",variant:"tonal",onClick:b},{default:a(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{q as default};