import React, { Fragment, useState } from "react";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";

import styles from "./Login.module.css";

const Login = () => {

    const [titleClass, setTitleClass] = useState('gibson-medium')

    const failLogin = (data) => {
        if (!data) {
            setTitleClass('gibson-medium')
        } else {
            setTitleClass(styles['fail-login']);
        }
    }


    return (
        <Fragment>
            <section className={styles["login-section"]}>
                <h2 className={titleClass}>Iniciar Sesión</h2>
                <LoginForm addFailAnimation={failLogin} />
                <div className={`mt-3 ${styles["signup-text"]} gibson-regular`}>
                    <span>¿Aún no te has registrado?</span><span className="primary-color d-inlineblock ml-1">Haz click aquí</span>
                </div>
            </section>
            <LoginFooter />
        </Fragment>
    )
}

export default Login;