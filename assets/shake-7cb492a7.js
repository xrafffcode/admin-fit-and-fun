import{W as h,X as e,Y as r,Z as t}from"./index-31daaf16.js";const o=h({id:"shake",state:()=>({shakes:[],loading:!1,error:null,success:null}),actions:{async fetchShakes(){try{this.loading=!0;const s=await e.get("/shake");this.shakes=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchShake(s){try{return this.loading=!0,(await e.get(`/shake/${s}`)).data.data}catch(a){this.handleError(a)}finally{this.loading=!1}},async createShake(s){try{this.loading=!0;const a=await e.post("/shake",s);this.success=a.data.message,r.push({name:"shakes"})}catch(a){this.error=t(a)}finally{this.loading=!1}},async updateShake(s){try{this.loading=!0;const a=await e.post(`/shake/${s.id}`,{...s,_method:"PUT"});this.success=a.data.message,r.push({name:"shakes"})}catch(a){console.error(a),this.error=t(a)}finally{this.loading=!1}},async deleteShake(s){try{this.loading=!0;const a=await e.delete(`/shake/${s}`);this.success=a.data.message}catch(a){this.error=t(a)}finally{this.loading=!1}},async getChartDataStatisticsShakesOut(){try{return this.loading=!0,(await e.get("/get-chart-data-statistics-shakes-out")).data}catch(s){this.handleError(s)}finally{this.loading=!1}}}});export{o as u};