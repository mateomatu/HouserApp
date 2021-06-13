import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthService, { AuthContext } from "../../services/User/User-service";

import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [loginFail, setLoginFail] = useState(false);
  const [validationMessage, setValidationMessage] = useState();

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoginFail(false);
    props.addFailAnimation(false);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const userData = await AuthService.login({
      email: enteredEmail,
      password: enteredPassword,
    });

    if (userData) {
      if (loginFail) {
        setLoginFail(false);
      }
      authCtx.updateAuthState(userData);
      props.addFailAnimation(false);
      history.push("/");
    } else {
      props.addFailAnimation(true);
      setLoginFail(true);

      if (enteredEmail.trim().length === 0) {
        setValidationMessage(<p>Por favor ingrese un email</p>);
        if (enteredPassword.trim().length === 0) {
            setValidationMessage(<p>Por favor complete ambos campos</p>);
        }
      } else if (enteredPassword.trim().length === 0) {
        setValidationMessage(<p>Por favor ingrese una contraseña</p>);
      } else {
        setValidationMessage(<p>Los datos ingresados no corresponden a uno de nuestros usuarios</p>);
      }

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles["login-form"]}>
      {loginFail && (
      <section className={styles["login-fail"]}> 
        {validationMessage} 
      </section>)}
      <section className={styles["input-section"]}>
        <label htmlFor="email">Email</label>
        <input ref={emailInputRef} type="text" id="email" name="email" />
      </section>
      <section className={styles["input-section"]}>
        <label htmlFor="password">Contraseña</label>
        <input
          ref={passwordInputRef}
          id="password"
          type="password"
          name="password"
        />
      </section>

      <button className="gibson-medium">Ingresar</button>
    </form>
  );
};

export default LoginForm;
