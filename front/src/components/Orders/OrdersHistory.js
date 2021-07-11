import React, { useEffect, useState, useContext, Fragment } from "react";

import OrdersHistoryList from "./OrdersHistoryList";
import Loader from "../UI/Loader";

import OrderService from "../../services/Orders/Order-service";
import { AuthContext } from "../../services/User/User-service";

import styles from "./OrdersHistory.module.css";

const titleClass = `ml-2 ${styles['service-title']} pages-title gibson-semibold`;

const OrdersHistory = () => {

    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const data = await OrderService.checkForOrders(authCtx.user.id_user);

            const loadedOrders = data

            console.log("asd", loadedOrders);
            
            loadedOrders.sort((a,b) => {
                return new Date(b.updated_at) - new Date(a.updated_at);
            })
            
            
            setOrders(loadedOrders);
            setIsLoading(false)
        })().catch(err => console.log("Hubo un error al traer las órdenes"))
    }, [])

    return (
        <Fragment>
            <h2 className={titleClass}>HISTORIAL DE PEDIDOS</h2>
            { !isLoading && <OrdersHistoryList orders={orders} />}
            { isLoading && <Loader />}
        </Fragment>
    )
}

export default OrdersHistory;