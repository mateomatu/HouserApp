import AuthService from "../User/User-service";

const geocodingServices = {
    /**
     * Gets the location of the solicitated user
     * 
     * @param address
     *
     * @returns {Promise<any>}
     */
    async getLocation(address) {
        const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.97502a624cadd8c8ae71539f9ed7e3c4&q=${address}&addressdetails=1&accept-language=es&countrycodes=AR&dedupe=0&format=json`);
        const responseData = await response.json();

        console.log("responseData", responseData);
        const location = responseData[0];

        return location;
    }
}

export default geocodingServices;