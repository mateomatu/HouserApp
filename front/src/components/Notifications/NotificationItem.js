import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { API_IMGS } from "../../constants/api";

import styles from "./NotificationItem.module.css";

const NotificationList = props => {

  const notification = props.order;

  return (
    <Fragment>
      <li className={`mb-2 ${styles["notification-container"]} ${!notification.read ? styles["read"] : styles['no-read']}`}>
        {/* */}
        <Link to={`/notifications/chat/${notification.id}`}  className={`flex align-center ${styles['notification-link']}`}>
          <img
            className={styles.photo}
            src={`${API_IMGS}/${notification.houserAvatar}`}
            alt={`ahre`}
            />
          <p className={styles["notification-text"]}>
            Tienes un nuevo mensaje de {notification.houserName}
          </p>
        </Link>
      </li>
{/*       <li className={`${styles["notification-container"]} ${styles["no-read"]}`}>
        <img
          className={styles.photo}
          src={`${API_IMGS}/gladys.jpg`}
          alt={`ahre`}
        />
        <p className={styles["notification-text"]}>
          Notificación ya leída ejemplo
        </p>
      </li> */}
    </Fragment>
  );
};

export default NotificationList;
