import { API_HOST } from "../../constants/api";

export const AllServices = {
    /**
     * Return all services.
     *
     * @returns {Promise<any>}
     */
    async all() {
        const response = await fetch(API_HOST + '/api/services');
        const responseData = await response.json();
        return responseData.data;
    }
}