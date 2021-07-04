import React, { Fragment } from "react";

import styles from "./OrdersHistory.module.css";

const titleClass = `ml-2 ${styles['service-title']} pages-title gibson-semibold`;

const OrdersHistory = () => {
    return (
        <h2 className={titleClass}>HISTORIAL DE PEDIDOS</h2>
    )
}

export default OrdersHistory;