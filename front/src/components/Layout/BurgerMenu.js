import React, { useContext, Fragment } from "react";
import { AuthContext } from "../../services/User/User-service";

import Sidebar from "./Sidebar";

//Constants
import { API_IMGS } from "../../constants/api";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {

    const authCtx = useContext(AuthContext);

    return (
        <Sidebar className={styles.sidebar}>
            <section className={styles['burger-profile']}>
                <img src={`${API_IMGS}/${authCtx.user.avatar}`} alt={`${authCtx.user.alt}`} />
                <div className={styles['burger-profile-text']}>
                    <span>{authCtx.user.name}</span>
                    <span>{authCtx.user.lastname}</span>
                </div>
            </section>
            <nav className={styles['burger-nav']}>
                <ul>
                    <li>
                    <svg className={styles['burger-nav-svg']} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 500 500">
                        <path d="M392.3,224.6v-75.1C392.3,67.3,328.2,0,250,0S107.7,67.3,107.7,149.5v75.1H68.5v245
                        c0,16.7,15,30.4,33.5,30.4h296c18.4,0,33.5-13.7,33.5-30.4v-245H392.3z M259.2,368.9v34.7h-18.4v-34.7c-9.2-3.7-15.7-12.6-15.7-23.1
                        c0-13.7,11.2-24.9,24.9-24.9s24.9,11.2,24.9,24.9C274.9,356.3,268.4,365.3,259.2,368.9z M158.3,224.6v-75.1
                        c0-56.1,41.1-101.6,91.7-101.6s91.7,45.6,91.7,101.6v75.1H158.3z"/>
                    </svg>
                    <span>Cerrar Sesión</span>
                    </li>
                </ul>
            </nav>
        </Sidebar>

    );
}

export default BurgerMenu;