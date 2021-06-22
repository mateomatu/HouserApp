import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./ChangeAddress.module.css";





const ChangeAddress = () => {

    const inputAddressRef = useRef();

    const submitNewAddress = (e) => {
        e.preventDefault();

        const enteredAddress = inputAddressRef.current.value;

    }

    return (
        <section className={styles.profile}>
            <section className={styles['profile-data']}>
                <Link to="/profile" className="primary-color bold">{"< Volver"}</Link>
                <h2 className="mt-4 mb-2">Cambiar Domicilio</h2>
                <form onSubmit={submitNewAddress} className={styles["login-form"]}>
                    <section className={styles["input-section"]}>
                        <label htmlFor="address">Nuevo Domicilio</label>
                        <input className="input" id="address" />
                    </section>
                    <button className="gibson-medium">Confirmar</button>
                </form>
            </section>
        </section>
    );
}

export default ChangeAddress