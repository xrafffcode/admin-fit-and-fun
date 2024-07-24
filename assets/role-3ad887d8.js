import{W as o,X as t,Y as r,Z as a}from"./index-31daaf16.js";const i=o({id:"role",state:()=>({roles:[],loading:!1,error:null,success:null}),actions:{async fetchRoles(){try{this.loading=!0;const s=await t.get("/role");this.roles=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchRole(s){try{return this.loading=!0,(await t.get(`/role/${s}`)).data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async createRole(s){try{this.loading=!0;const e=await t.post("/role",s);this.success=e.data.message,r.push({name:"roles"})}catch(e){this.error=a(e)}finally{this.loading=!1}},async updateRole(s){try{this.loading=!0;const e=await t.post(`/role/${s.id}`,{...s,_method:"PUT"});this.success=e.data.message,r.push({name:"roles"})}catch(e){this.error=a(e)}finally{this.loading=!1}},async deleteRole(s){try{this.loading=!0;const e=await t.delete(`/role/${s}`);this.success=e.data.message,this.fetchRoles()}catch(e){this.error=a(e)}finally{this.loading=!1}}}});export{i as u};