import React, { Fragment } from "react";

import NotificationItem from "./NotificationItem";

import styles from "./NotificationList.module.css";

const NotificationList = () => {
    return (
        <Fragment >
            <ul className={styles['notification-list']}>
                <NotificationItem />
            </ul>
        </Fragment>
    )
}

export default NotificationList;