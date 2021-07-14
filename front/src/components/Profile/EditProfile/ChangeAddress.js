import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import AuthService from "../../../services/User/User-service";
import { AuthContext } from "../../../services/User/User-service";

import styles from "./ChangeAddress.module.css";


const ChangeAddress = () => {

    const authCtx = useContext(AuthContext);

    const inputAddressRef = useRef();

    const submitNewAddress = (e) => {
        e.preventDefault();

        const idUser = authCtx.user.id_user
        const enteredAddress = inputAddressRef.current.value;

        const userData = {
            id_user: idUser,
            address: enteredAddress
        }

        if (enteredAddress !== null && enteredAddress !== "" && enteredAddress !== undefined) {
            AuthService.editProfile(userData);
        }




    }

    return (
        <section className={styles.profile}>
            <section className={styles['profile-data']}>
                <Link to="/profile" className="primary-color bold">{"< Volver"}</Link>
                <h2 className="mt-4 mb-2">Cambiar Domicilio</h2>
                <form onSubmit={submitNewAddress} className={styles["login-form"]}>
                    <section className={styles["input-section"]}>
                        <label htmlFor="address">Nuevo Domicilio</label>
                        <input ref={inputAddressRef} className="input" id="address" />
                    </section>
                    <button className="gibson-medium">Confirmar</button>
                </form>
            </section>
        </section>
    );
}

export default ChangeAddress