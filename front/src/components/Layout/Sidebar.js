import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Sidebar.module.css";

const Backdrop = props => {
    return (
        <div className={styles.backdrop}></div>
    )
}

const SidebarOverlay = props => {
    return (
        <div className={styles['burger-container']}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Sidebar = props => {

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<SidebarOverlay>{props.children}</SidebarOverlay>, portalElement)}
        </Fragment>
    )
}

export default Sidebar;