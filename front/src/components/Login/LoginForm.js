import React from "react";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <form className={styles["login-form"]}>
            <section className={styles["input-section"]}>
                <input type="text" name="email" placeholder="Email" />
            </section>
            <section className={styles["input-section"]}>
                <input type="password" name="password" placeholder="Contraseña" />
            </section>
            <button className="gibson-medium">Ingresar</button>
        </form>
    )
}

export default LoginForm;