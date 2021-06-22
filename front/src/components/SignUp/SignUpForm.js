import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router";

import AuthService, { AuthContext } from "../../services/User/User-service";
import RepeatPassword from "../UI/RepeatPassword";

import Loader from "../UI/Loader";

import styles from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  let errorMsg = "";
  let enteredPassword = "";
  let emailInputRef = useRef();
  let nameInputRef = useRef();
  let lastnameInputRef = useRef();
  let phoneInputRef = useRef();
  let addressInputRef = useRef();


  const getNewPassword = (pwd) => {
    enteredPassword = pwd;
  }


  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;
    const enteredTelephone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const response = await AuthService.signUp({
      email: enteredEmail,
      password: enteredPassword,
      name: enteredName,
      lastname: enteredLastname,
      telephone: enteredTelephone,
      address: enteredAddress
    });

    console.log("response: ", response);

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
        <input ref={nameInputRef} type="text" id="name" name="name" />
      </section>
      <section className={styles["input-section"]}>
        <label htmlFor="lastname">Apellido</label>
        <input ref={lastnameInputRef} type="text" id="lastname" name="lastname" />
      </section>
      <section className={styles["input-section"]}>
        <label htmlFor="telephone">Teléfono</label>
        <input ref={phoneInputRef} type="text" id="telephone" name="telephone" />
      </section>
      <section className={styles["input-section"]}>
        <label htmlFor="address">Domicilio</label>
        <input ref={addressInputRef} type="text" id="address" name="address" />
      </section>
      <RepeatPassword passwordHandler={getNewPassword} errorMsg={errorMsg}/>

      <button className="gibson-medium">Registrarse</button>
    </form>
  );
};

export default SignUpForm;
