import React from "react";
import { Link } from "react-router-dom";

import styles from "./UserProfile.module.css";

const USER_DUMMY = {
    userId: 1,
    name: "Mateo",
    lastname: "Maturano",
    email: "mateo.maturano@davinci.com.ar",
    password: "*********",
    domicilio: "Domicilio 1",
    avatar: "yo.jpg"
}

const publicPath = process.env.PUBLIC_URL;

const UserProfile = () => {



    return (
        <section className={styles.profile}>
            <header className={styles['profile-header']}>
                <img className={styles.photo} src={`${publicPath}/assets/imgs/${USER_DUMMY.avatar}`} alt="yo" />
            </header>
            <section className={styles['profile-data']}>
                <ul>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Nombre y Apellido</h3>
                                <p>{USER_DUMMY.name + " " + USER_DUMMY.lastname}</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                    <li className={styles['user-data']}>
                        <h3>Email</h3>
                        <p>{USER_DUMMY.email}</p>
                    </li>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Domicilio</h3>
                                <p>{USER_DUMMY.domicilio}</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Contraseña</h3>
                                <p>{USER_DUMMY.password}</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default UserProfile;