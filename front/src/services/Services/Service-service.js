import { API_HOST } from "../../constants/api";

const serviceServices = {
    /**
     * Return all services.
     *
     * @returns {Promise<any>}
     */
    async allServices() {
        const response = await fetch(API_HOST + '/api/services');
        const responseData = await response.json();
        return responseData.data;
    },

    async bringServiceById(id) {
        const response = await fetch(API_HOST + `/api/service/${id}`);
        const responseData = await response.json();
        return responseData.data;
    },

    async bringHousersByService(id) {
        const response = await fetch(API_HOST + `/api/services/housers/${id}`);
        const responseData = await response.json();
        return responseData.data;
    }
}

export default serviceServices;