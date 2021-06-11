import React, { Fragment } from "react";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";

import styles from "./Login.module.css";

const Login = () => {
    return (
        <Fragment>
            <section className={styles["login-section"]}>
                <h2 className="gibson-medium">Iniciar Sesión</h2>
                <LoginForm />
                <div className={`mt-3 ${styles["signup-text"]} gibson-regular`}>
                    <span>¿Aún no te has registrado?</span><span className="primary-color d-inlineblock ml-1">Haz click aquí</span>
                </div>
            </section>
            <LoginFooter />
        </Fragment>
    )
}

export default Login;