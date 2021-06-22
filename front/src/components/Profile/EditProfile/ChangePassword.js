import React from "react";
import { Link } from "react-router-dom";

import RepeatPassword from "../../UI/RepeatPassword";

import styles from "./ChangePassword.module.css";

const ChangePassword = () => {


    let password = "";
    let errorMsg = "";

    const getNewPassword = (pwd) => {
        password = pwd;
    }
    
    const submitNewPassword = (e) => {
        e.preventDefault();

        if (password === undefined || password === null || password.trim().length === 0) {
            errorMsg = "Ingrese una nueva contraseña";
        }

        //TODO: Actualizar Contraseña.
    }

    return (
        <section className={styles.profile}>
            <section className={styles['profile-data']}>
                <Link to="/profile" className="primary-color bold">{"< Volver"}</Link>
                <h2 className="mt-4 mb-2">Cambiar contraseña</h2>
                <form onSubmit={submitNewPassword} className={styles["login-form"]}>
                    <RepeatPassword passwordHandler={getNewPassword} errorMsg={errorMsg}></RepeatPassword>
                    <button className="gibson-medium">Confirmar</button>
                </form>
            </section>
        </section>
    );
}

export default ChangePassword