import React, { useRef, useContext } from "react";
import { useHistory } from "react-router";
import AuthService, { AuthContext } from "../../services/User/User-service";

import styles from "./LoginForm.module.css";

const LoginForm = () => {

    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();


    const submitHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const userData = await AuthService.login({email: enteredEmail, password: enteredPassword});

        if(userData) {
            authCtx.updateAuthState(userData);
            history.push('/');
        } else {
            console.log("Error de autenticación.");
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles["login-form"]}>
            <section className={styles["input-section"]}>
                <input ref={emailInputRef} type="text" name="email" placeholder="Email" />
            </section>
            <section className={styles["input-section"]}>
                <input ref={passwordInputRef} type="password" name="password" placeholder="Contraseña" />
            </section>
            <button className="gibson-medium">Ingresar</button>
        </form>
    )
}

export default LoginForm;