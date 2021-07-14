import React, { useState } from "react";

import Loader from "../UI/Loader";

import { API_IMGS } from "../../constants/api";

import OrderService from "../../services/Orders/Order-service";

import styles from "./OrderItem.module.css";

const OrderItem = props => {

  const order = props.order;
  const [state, setState] = useState(order.fk_order_state);
  const [isLoading, setIsLoading] = useState(false);

  const clickCancelJobHandler = () => {
    (async () => {
      setIsLoading(true);
      const data = await OrderService.updateOrderState(order.id_order, 3);
      
      if (data) {
                
      }
      //Devuelve un success

      setIsLoading(false);
      setState(3);
    })().catch(err => console.log("Error al actualizar la orden"))
  }


  const clickFinishJobHandler = () => {
    (async () => {
      setIsLoading(true);
      const data = await OrderService.updateOrderState(order.id_order, 4);
      
      //Devuelve un success

      console.log(data);

      setIsLoading(false);
      setState(4);
    })().catch(err => console.log("Error al actualizar la orden"))
  }

  if (state === 2 || state === 4) {
    return (
      <li>
        <section className={`mb-5 ${styles['houser-card']}`}>
            <header className={`${styles['profile-header']} ${ state === 2 ? styles.pending : styles.completed}`}>
                <img className={styles['houser-avatar']} src={`${API_IMGS}/${order.avatar}`} alt="are"/>    
            </header>
            { !isLoading && <section className={styles['houser-card-content']}>
              <h3>{order.name + " " + order.lastname}</h3>
              { state === 4 && <p>Valora el trabajo del houser</p>}
              { state === 4 && (
                <ul className={'flex justify-center'}>
                  <li>star 1</li>
                  <li>star 2</li>
                  <li>star 3</li>
                  <li>star 4</li>
                  <li>star 5</li>
                </ul>
              )}
              <p className={styles.service}>{order.title}</p>
            </section>}
            { isLoading && <Loader />}
            { state === 2 && (<section className={styles['action-buttons']}>
                <button onClick={clickCancelJobHandler} className={styles.cancel}>Cancelar Pedido</button>
                <button onClick={clickFinishJobHandler} className={styles.finish}>Trabajo Finalizado</button>
            </section>)}
        </section>
      </li>
    );
  } else {
    return <span style={{display: 'none'}}></span>
  }
};

export default OrderItem;
