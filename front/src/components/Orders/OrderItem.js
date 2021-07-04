import React, { Fragment } from "react";

import { API_IMGS } from "../../constants/api";

import styles from "./OrderItem.module.css";

const OrderItem = props => {

  const order = props.order;

  return (
    <Fragment>
    <section className={`mb-5 ${styles['houser-card']}`}>
        <header className={`${styles['profile-header']} ${styles.pending}`}>
            <img className={styles['houser-avatar']} src={`${API_IMGS}/${order.avatar}`} alt="are"/>    
        </header>
        <section className={styles['houser-card-content']}>
          <h3>{order.name + " " + order.lastname}</h3>
          <p>Aca van las estrellitas :3</p>
          <p className={styles.service}>{order.title}</p>
        </section>
        <section className={styles['action-buttons']}>
            <button className={styles.cancel}>Cancelar Pedido</button>
            <button className={styles.finish}>Trabajo Finalizado</button>
        </section>
    </section>
    </Fragment>
  );
};

export default OrderItem;
