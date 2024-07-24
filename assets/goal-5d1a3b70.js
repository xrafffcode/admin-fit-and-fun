import{W as o,X as e,Y as r,Z as t}from"./index-31daaf16.js";const i=o({id:"goal",state:()=>({goals:[],loading:!1,error:null,success:null}),actions:{async fetchGoals(){try{this.loading=!0;const s=await e.get("/goal");this.goals=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchGoal(s){try{return this.loading=!0,(await e.get(`/goal/${s}`)).data.data}catch(a){this.handleError(a)}finally{this.loading=!1}},async createGoal(s){try{this.loading=!0;const a=await e.post("/goal",s);this.success=a.data.message,r.push({name:"goals"})}catch(a){this.error=t(a)}finally{this.loading=!1}},async updateGoal(s){try{this.loading=!0;const a=await e.post(`/goal/${s.id}`,{...s,_method:"PUT"});this.success=a.data.message,r.push({name:"goals"})}catch(a){console.error(a),this.error=t(a)}finally{this.loading=!1}},async deleteGoal(s){try{this.loading=!0;const a=await e.delete(`/goal/${s}`);this.success=a.data.message}catch(a){this.error=t(a)}finally{this.loading=!1}}}});export{i as u};
