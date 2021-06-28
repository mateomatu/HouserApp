import { API_HOST } from "../../constants/api";

const OrderService = {

    async generateOrder(data) {
        const res = await fetch(`${API_HOST}/api/orders/save`, {
            method: 'POST',
            body: JSON.stringify({
                fk_user: data.fk_user,
                fk_houser: data.fk_houser,
                fk_service: data.fk_service,
                user_message: data.user_message
               }),
               headers: {
                   'Content-Type': 'application/json',
                   'X-Requested-With': 'XMLHttpRequest',
               }
           });
       const responseData = await res.json();
       console.log("generate order: ", responseData);
   },

}

export default OrderService;