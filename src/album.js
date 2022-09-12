
import http from "./service/https";

    class Albums {  
         
        getAll() {  
            return http.get();  
          }  
            
    }  
    export default new Albums();  
