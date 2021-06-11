import React from "react";
import { API_HOST } from "../../constants/api";

let userData = {
    id_usuario: null,
    email: null
};

let token = null;

if(localStorage.getItem('token') !== null) {
    token = localStorage.getItem('token');
    userData = JSON.parse(localStorage.getItem('userData'));
    console.log("token", token);
    console.log("userData", userData);
}

const AuthContext = React.createContext({
    user: userData,
    updateAuthState(data) {},
});

AuthContext.displayName = 'AuthContext';

const AuthService = {

    /**
     *
     * @param {Object<{email: String, password: String}>} cred
     * @returns {Promise<void>}
     */
     async login(cred) {
         const res = await fetch(`${API_HOST}/api/auth/login`, {
             method: 'POST',
             body: JSON.stringify({
                 email: cred.email,
                 password: cred.password
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });
        const responseData = await res.json();
        console.log(responseData);
        if(responseData.success) {
            userData = {
                id_user: responseData.data.id_user,
                email: responseData.data.email,
            };
            token = responseData.data.token;

            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(userData));
            return {
                ...userData
            };
        }
        return false;
    },

    /**
     * Return all services.
     *
     * @returns {Promise<any>}
     */
    getLoggedUser() {
        return {...userData};
    },
    
    async getUserData(id) {
        const response = await fetch(`${API_HOST}/api/users/${id}/profile`);
        const responseData = await response.json();
        return responseData.data;
    },
    
    isLogged() {
        let isLogged = false;
        if(localStorage.getItem('token') !== null) {
            isLogged = true;
        }
        return isLogged;
    }
    
    ,

    async logout() {
        await fetch(`${API_HOST}/api/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                ...this.authorizationHeader()
            }
        });

        userData = {
            id_usuario: null,
            email: null
        };
        token = null;
        if(localStorage.getItem('token') !== null) {
            localStorage.removeItem('token');
        }

        return true;
    },

    /**
     *
     * @returns {null|string}
     */
    getToken() {
        return token;
    },

        /**
     * Retorna un objeto con el Authorization header configurado si el usuario está autenticado.
     * null de lo contrario.
     *
     * @returns {{Authorization: string}|null}
     */
    authorizationHeader() {
        if(!this.isAuthenticated()) return null;
        return {'Authorization': 'Bearer ' + AuthService.getToken()};
    }
}

export default AuthService;
export {AuthContext};