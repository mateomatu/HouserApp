import React, { useEffect, useState, useContext } from "react";

import OrdersList from "./OrdersList";
import Loader from "../UI/Loader";

import { AuthContext } from "../../services/User/User-service";
import OrderService from "../../services/Orders/Order-service";

import styles from "./Orders.module.css";


const Orders = () => {

    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const data = await OrderService.checkForOrders(authCtx.user.id_user);

            console.log("data", data);

            const loadedOrders = data.filter(order => {
                return order.fk_order_state === 2 || order.fk_order_state === 4;
            })

            console.log("asd", loadedOrders);
            
            loadedOrders.sort((a,b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            })
            
            
            setOrders(loadedOrders);
            setIsLoading(false)
        })().catch(err => console.log("Hubo un error al traer las órdenes"))
    }, [])

    const titleClass = 'pages-title gibson-semibold';

    return (
        <section className={`${styles.orders}`}>
            <h2 className={"ml-2 " + titleClass}>PEDIDOS ACTIVOS</h2>
            { !isLoading && <OrdersList orders={orders} />}
            { isLoading && <Loader />}
        </section>
    );
}

export default Orders;