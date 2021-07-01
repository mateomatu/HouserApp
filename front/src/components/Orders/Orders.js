import React from "react";

import OrdersList from "./OrdersList";
import styles from "./Orders.module.css";


const Orders = () => {

    const titleClass = 'pages-title gibson-semibold';

    return (
        <section className={styles.orders}>
            <h2 className={"ml-2 " + titleClass}>PEDIDOS ACTIVOS</h2>
            <OrdersList />
        </section>
    );
}

export default Orders;