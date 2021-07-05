import React from "react";

import { API_IMGS } from "../../constants/api";

import styles from "./OrdersHistoryItem.module.css";

const OrdersHistoryItem = props => {

    const order = props.order;

    return (
        <li>
            <section className={`mb-5 ${styles['houser-card']}`}>
                <header className={`${styles['profile-header']} ${styles.pending} ${order.fk_order_state === 3 ? styles.canceled : styles.completed}`}>
                    <img className={styles['houser-avatar']} src={`${API_IMGS}/${order.avatar}`} alt="are"/>    
                </header>
                <section className={styles['houser-card-content']}>
                <h3>{order.name + " " + order.lastname}</h3>
                { order.fk_order_state !== 3 && <p>Aca van las estrellitas :3</p>}
                <p className={styles.service}>{order.title}</p>
                <p className={`mt-3 ${styles.service}`}>Has <span className={ order.fk_order_state === 3? `text-danger` : `text-success`}>{order.state}</span> este Houser</p>
                </section>
            </section>
        </li>
    )
}

export default OrdersHistoryItem;