import React from "react";

import styles from "./Header.module.css";
import houserImage from "../../assets/logo180.png"

const Header = () => {
    return (
        <header className={styles['app-header']}>
            <h1 id="logo">
                <img src={houserImage} alt="logo"/>
            </h1>
        </header>
    )
}

export default Header;