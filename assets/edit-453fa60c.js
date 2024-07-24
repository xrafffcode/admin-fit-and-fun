import{d as P,P as T,r as B,Q as C,o as h,f as w,i as a,c as e,T as i,I as n,U as D,l as o,j as N}from"./index-31daaf16.js";import{b as R}from"./formatters-9852ea6e.js";import{u as f}from"./program-45586e84.js";import{a as d,b as S,V}from"./VRow-281e71e9.js";import{V as U}from"./VForm-27224658.js";import{V as u}from"./VTextField-fa88338a.js";import{V as k}from"./VTextarea-42a87be7.js";import"./VGrid-f9b7f30a.js";import"./forwardRefs-5fcb3655.js";const E=N("h2",{class:"mb-0"}," Edit Program ",-1),G={__name:"edit",setup(I){const g=P(),{loading:_,error:t}=T(f()),{fetchProgram:v,updateProgram:y}=f(),c=g.params.id,r=B({id:c,name:"",description:"",time:"",slot:""}),p=async()=>{try{const l=await v(c);r.value={id:l.id,name:l.name,description:l.description,time:R(l.time),slot:l.slot}}catch(l){console.error(l)}};C(()=>{document.title="Edit Exercise",p()});const b=()=>{y(r.value)},x=()=>{p()};return(l,s)=>(h(),w(V,null,{default:a(()=>[e(d,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[E,e(i,{to:{name:"programs"},color:"primary"},{default:a(()=>[n(" Back ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(S,null,{default:a(()=>[e(U,{onSubmit:D(b,["prevent"])},{default:a(()=>[e(V,null,{default:a(()=>[e(d,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:r.value.name,"onUpdate:modelValue":s[0]||(s[0]=m=>r.value.name=m),label:"Name",placeholder:"Program Name","error-messages":o(t)&&o(t).name?[o(t).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"12"},{default:a(()=>[e(k,{modelValue:r.value.description,"onUpdate:modelValue":s[1]||(s[1]=m=>r.value.description=m),label:"Description",placeholder:"Program Description","error-messages":o(t)&&o(t).description?[o(t).description]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:r.value.time,"onUpdate:modelValue":s[2]||(s[2]=m=>r.value.time=m),label:"Date & Time","error-messages":o(t)&&o(t).time?[o(t).time]:[],type:"datetime-local"},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"12"},{default:a(()=>[e(u,{modelValue:r.value.slot,"onUpdate:modelValue":s[3]||(s[3]=m=>r.value.slot=m),label:"Capacity Limit",placeholder:"Program Capacity Limit","error-messages":o(t)&&o(t).slot?[o(t).slot]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(i,{type:"submit",loading:o(_),color:"primary"},{default:a(()=>[n(" Save ")]),_:1},8,["loading"]),e(i,{color:"secondary",variant:"tonal",onClick:x},{default:a(()=>[n(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{G as default};