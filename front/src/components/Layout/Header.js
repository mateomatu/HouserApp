import React from "react";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles['app-header']}>
            <h1 id="logo">
                <img src={`${process.env.PUBLIC_URL}/assets/logo180.png`} alt="logo"/>
            </h1>
        </header>
    )
}

export default Header;