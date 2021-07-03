import React, { Fragment } from "react";
import OrderItem from "./OrderItem";

const OrdersList = () => {
    return (
        <Fragment>
        <ul>
            <OrderItem /> 
        </ul>
        <p className="ml-2">No tienes ningún pedido activo</p>
        </Fragment>
    );
}

export default OrdersList;