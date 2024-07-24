import{W as i,X as r,Y as t,Z as a}from"./index-31daaf16.js";const o=i({id:"membership",state:()=>({memberships:[],loading:!1,error:null,success:null}),actions:{async fetchMemberships(){try{this.loading=!0;const s=await r.get("/membership");this.memberships=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchMembership(s){try{return this.loading=!0,(await r.get(`/membership/${s}`)).data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async createMembership(s){try{this.loading=!0;const e=await r.post("/membership",s);this.success=e.data.message,t.push({name:"memberships"})}catch(e){this.error=a(e)}finally{this.loading=!1}},async updateMembership(s){try{this.loading=!0;const e=await r.post(`/membership/${s.id}`,{...s,_method:"PUT"});this.success=e.data.message,t.push({name:"memberships"})}catch(e){console.error(e),this.error=a(e)}finally{this.loading=!1}},async deleteMembership(s){try{this.loading=!0;const e=await r.delete(`/membership/${s}`);this.success=e.data.message}catch(e){this.error=a(e)}finally{this.loading=!1}}}});export{o as u};