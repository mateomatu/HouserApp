import React from "react";
import { Fragment } from "react";

import LoginFooter from "../components/Login/LoginFooter";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
    return (
        <Fragment>
            <h2>Iniciar Sesión</h2>
            <LoginForm />
            <LoginFooter  />
        </Fragment>
    )
}

export default LoginPage;