import{P as g,r as v,Q as x,o as b,f as y,i as a,c as e,T as d,I as i,U as B,l as o,j as C}from"./index-31daaf16.js";import{u as c}from"./program-45586e84.js";import{a as m,b as T,V as p}from"./VRow-281e71e9.js";import{V as E}from"./VForm-27224658.js";import{V as n}from"./VTextField-fa88338a.js";import{V as N}from"./VTextarea-42a87be7.js";import"./VGrid-f9b7f30a.js";import"./forwardRefs-5fcb3655.js";const U=C("h2",{class:"mb-0"}," Add Exercise ",-1),L={__name:"create",setup(k){const{loading:f,error:l}=g(c()),{createProgram:V}=c(),t=v({name:"",description:"",time:"",slot:""}),u=()=>{t.value={name:"",description:"",time:"",slot:""}},_=()=>{V(t.value)};return x(()=>{document.title="Add Exercise",u(),l.value=null}),(w,s)=>(b(),y(p,null,{default:a(()=>[e(m,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[U,e(d,{to:{name:"programs"},color:"primary"},{default:a(()=>[i(" Back ")]),_:1})]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(T,null,{default:a(()=>[e(E,{onSubmit:B(_,["prevent"])},{default:a(()=>[e(p,null,{default:a(()=>[e(m,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=r=>t.value.name=r),label:"Name",placeholder:"Exercise Name","error-messages":o(l)&&o(l).name?[o(l).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(m,{cols:"12",md:"12"},{default:a(()=>[e(N,{modelValue:t.value.description,"onUpdate:modelValue":s[1]||(s[1]=r=>t.value.description=r),label:"Description",placeholder:"Exercise Description","error-messages":o(l)&&o(l).description?[o(l).description]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(m,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:t.value.time,"onUpdate:modelValue":s[2]||(s[2]=r=>t.value.time=r),label:"Date & Time","error-messages":o(l)&&o(l).time?[o(l).time]:[],type:"datetime-local"},null,8,["modelValue","error-messages"])]),_:1}),e(m,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:t.value.slot,"onUpdate:modelValue":s[3]||(s[3]=r=>t.value.slot=r),label:"Capacity Limit",placeholder:"Exercise Capacity Limit","error-messages":o(l)&&o(l).slot?[o(l).slot]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(m,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(d,{type:"submit",loading:o(f),color:"primary"},{default:a(()=>[i(" Save ")]),_:1},8,["loading"]),e(d,{color:"secondary",variant:"tonal",onClick:u},{default:a(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{L as default};