import React from "react";
import { Link } from "react-router-dom";

import styles from "./ServiceItem.module.css";

const publicPath = process.env.PUBLIC_URL;

const ServiceItem = props => {

    const service = props.service;


    return (
        <li className={styles['service-item']}>
            <Link className={styles['service-link']} to={`/services/${service.id}`}> 
                <h3>{props.service.title}</h3>
                <img src={`${publicPath}/assets/imgs/${service.img}`} alt={service.alt} />
            </Link>
        </li>
    )
}

export default ServiceItem;