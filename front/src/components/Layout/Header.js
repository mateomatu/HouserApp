import React from "react";
import { PUBLIC_PATH } from "../../constants/api";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles['app-header']}>
            <h1 id="logo">
                <img src={`${PUBLIC_PATH}/assets/logo180.png`} alt="logo"/>
            </h1>
        </header>
    )
}

export default Header;