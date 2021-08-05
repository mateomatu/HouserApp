import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { PUBLIC_PATH } from "../../constants/api";
import Loader from "../UI/Loader";

import styles from "./Ad.module.css";

const Ad = () => {
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const houserId = params.houserId;
    const serviceId = params.serviceId;

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            <Link to={`/contact-houser/${houserId}/${serviceId}`} className={styles.adbtn}><img src={`${PUBLIC_PATH}/assets/icons/close.svg`} alt="close" /></Link>
            <img className={styles['ad']} src={`${PUBLIC_PATH}/assets/imgs/ad3.jpeg`} alt="Publicidad" />
        </Fragment>
    );
}

export default Ad;