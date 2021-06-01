import React from "react";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <form>
            <section>
                <div>
                   <label>Email</label>
                </div>
                <input type="text" />
            </section>
            <section>
                <div>
                    <label>Contraseña</label>
                </div>
                <input type="text" />
            </section>
        </form>
    )
}

export default LoginForm;