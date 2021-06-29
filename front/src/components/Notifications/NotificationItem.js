import React, { Fragment } from "react";

import { API_IMGS } from "../../constants/api";

import styles from "./NotificationItem.module.css";

const NotificationList = () => {
  return (
    <Fragment>
      <li className={`mb-2 ${styles["notification-container"]} ${styles["read"]}`}>
        <img
          className={styles.photo}
          src={`${API_IMGS}/laura.jpg`}
          alt={`ahre`}
        />
        <p className={styles["notification-text"]}>
          Notificación no leída ejemplo
        </p>
      </li>
      <li className={`${styles["notification-container"]} ${styles["no-read"]}`}>
        <img
          className={styles.photo}
          src={`${API_IMGS}/gladys.jpg`}
          alt={`ahre`}
        />
        <p className={styles["notification-text"]}>
          Notificación ya leída ejemplo
        </p>
      </li>
    </Fragment>
  );
};

export default NotificationList;
