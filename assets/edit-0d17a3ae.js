import{d as T,P as c,r as w,Q as k,o as C,f as U,i as s,c as e,T as n,I as d,U as N,l as o,j}from"./index-31daaf16.js";import{u as _}from"./membership-1a132632.js";import{u as f}from"./member-e189fca8.js";import{a as m,b as E,V as b}from"./VRow-281e71e9.js";import{V as F}from"./VForm-27224658.js";import{V as I}from"./VAutocomplete-1c70452f.js";import{V as g}from"./VTextField-fa88338a.js";import"./VGrid-f9b7f30a.js";import"./forwardRefs-5fcb3655.js";import"./VSelect-8cde19f0.js";import"./VMenu-5921d0fa.js";import"./VOverlay-4d5b6a7d.js";import"./VChip-c0dd9028.js";const A=j("h2",{class:"mb-0"}," Edit Membership ",-1),Z={__name:"edit",setup(D){const V=T(),{loading:y,error:a}=c(_()),{fetchMembership:h,updateMembership:v}=_(),{members:M}=c(f()),{fetchMembers:x,loading:S}=f(),u=V.params.id,t=w({id:u,member_id:"",type:"",remaining_sessions:""}),p=async()=>{try{const r=await h(u);t.value={id:r.id,member_id:r.member.id,type:r.type,remaining_sessions:r.remaining_sessions}}catch(r){console.error(r)}};k(()=>{document.title="Edit Membership",p(),x()});const B=()=>{v(t.value)},R=()=>{p()};return(r,l)=>(C(),U(b,null,{default:s(()=>[e(m,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:s(()=>[A,e(n,{to:{name:"memberships"},color:"primary"},{default:s(()=>[d(" Back ")]),_:1})]),_:1}),e(m,{cols:"12"},{default:s(()=>[e(E,null,{default:s(()=>[e(F,{onSubmit:N(B,["prevent"])},{default:s(()=>[e(b,null,{default:s(()=>[e(m,{cols:"12",md:"12"},{default:s(()=>[e(I,{modelValue:t.value.member_id,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value.member_id=i),items:o(M),label:"Select Member","item-title":"name","item-value":"id","error-messages":o(a)&&o(a).member_id?[o(a).member_id]:[],loading:o(S)},null,8,["modelValue","items","error-messages","loading"])]),_:1}),e(m,{cols:"12",md:"12"},{default:s(()=>[e(g,{modelValue:t.value.type,"onUpdate:modelValue":l[1]||(l[1]=i=>t.value.type=i),label:"Type",placeholder:"Type","error-messages":o(a)&&o(a).type?[o(a).type]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(m,{cols:"12",md:"12"},{default:s(()=>[e(g,{modelValue:t.value.remaining_sessions,"onUpdate:modelValue":l[2]||(l[2]=i=>t.value.remaining_sessions=i),label:"Remaining Sessions",placeholder:"Sessions","error-messages":o(a)&&o(a).remaining_sessions?[o(a).remaining_sessions]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(m,{cols:"12",class:"d-flex gap-4"},{default:s(()=>[e(n,{type:"submit",loading:o(y),color:"primary"},{default:s(()=>[d(" Save ")]),_:1},8,["loading"]),e(n,{type:"reset",color:"secondary",variant:"tonal",onClick:R},{default:s(()=>[d(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Z as default};