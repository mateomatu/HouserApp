import React, { Fragment } from "react";
import OrderItem from "./OrderItem";

const OrdersList = () => {
    return (
        <Fragment>
        <ul>
            <OrderItem />
            
        </ul>
        <p className="ml-2">Aún no tienes ningún pedido</p>
        </Fragment>
    );
}

export default OrdersList;