import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthService, { AuthContext } from "../../services/User/User-service";

import Loader from "../UI/Loader";

import styles from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let rePasswordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  if (loading) {
    return (<Loader />)
  }

  return (
    <form onSubmit={submitHandler} className={styles["login-form"]}>
      <section className={styles["input-section"]}>
        <label htmlFor="email">Email</label>
        <input ref={emailInputRef} type="email" id="email" name="email" />
      </section>
      <section className={styles["input-section"]}>
        <label htmlFor="name">Nombre</label>
        <input ref={emailInputRef} type="text" id="name" name="name" />
      </section>
      <section className={styles["input-section"]}>
        <label htmlFor="lastname">Apellido</label>
        <input ref={emailInputRef} type="text" id="lastname" name="lastname" />
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
      <section className={styles["input-section"]}>
        <label htmlFor="rePassword">Repetir contraseña</label>
        <input
          ref={rePasswordInputRef}
          id="rePassword"
          type="password"
          name="rePassword"
        />
      </section>

      <button className="gibson-medium">Registrarse</button>
    </form>
  );
};

export default SignUpForm;
