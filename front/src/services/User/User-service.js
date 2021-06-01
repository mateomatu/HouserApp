import { API_HOST } from "../../constants/api";

const UserService = {
    /**
     * Return all services.
     *
     * @returns {Promise<any>}
     */
    async userData(id) {
        const response = await fetch(API_HOST + `/api/users/${id}`);
        const responseData = await response.json();
        return responseData.data;
    }
}

export default UserService;