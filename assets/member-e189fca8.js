import{W as o,X as r,Y as a,Z as t}from"./index-31daaf16.js";const n=o({id:"member",state:()=>({members:[],loading:!1,error:null,success:null}),actions:{async fetchMembers(){try{this.loading=!0;const e=await r.get("/member");this.members=e.data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async fetchMember(e){try{return this.loading=!0,(await r.get(`/member/${e}`)).data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async createMember(e){try{this.loading=!0;const s=await r.post("/member",e);this.success=s.data.message,a.push({name:"members"})}catch(s){this.error=t(s)}finally{this.loading=!1}},async updateMember(e){try{this.loading=!0;const s=await r.post(`/member/${e.id}`,{...e,_method:"PUT"});this.success=s.data.message,a.push({name:"members"})}catch(s){console.error(s),this.error=t(s)}finally{this.loading=!1}},async deleteMember(e){try{this.loading=!0;const s=await r.delete(`/member/${e}`);this.success=s.data.message}catch(s){this.error=t(s)}finally{this.loading=!1}},async getChartDataStatisticsMemberGroupByCoach(){try{return this.loading=!0,(await r.get("/get-chart-data-statistics-member-group-by-coach")).data}catch(e){this.error=t(e)}finally{this.loading=!1}}}});export{n as u};
