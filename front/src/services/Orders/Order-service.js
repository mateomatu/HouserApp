import { API_HOST } from "../../constants/api";


const OrderService = {
    
    async checkForOrders(id){
        const response = await fetch(API_HOST + `/api/orders/users/${id}`);
        const responseData = await response.json();
        return responseData.data;
    },

    async generateOrder(data) {
        const res = await fetch(`${API_HOST}/api/orders/request`, {
            method: 'POST',
            body: JSON.stringify({
                fk_user: data.fk_user,
                fk_houser: data.fk_houser,
                fk_service: data.fk_service,
                user_message: data.user_message
               }),
               headers: {
                   'Content-Type': 'application/json',
                   'X-Requested-With': 'XMLHttpRequest'
               }
           });
       const responseData = await res.json();
       console.log("generate order: ", responseData);
   },

   /**
* Retorna un objeto con el Authorization header configurado si el usuario está autenticado.
* null de lo contrario.
*
* @returns {{Authorization: string}|null}
*/
/* authorizationHeader() {
   if(!this.isAuthenticated()) return null;
   return {'Authorization': 'Bearer ' + AuthService.getToken()};
} */

}

export default OrderService;