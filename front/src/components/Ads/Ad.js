import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { PUBLIC_PATH } from "../../constants/api";
import Loader from "../UI/Loader";

import styles from "./Ad.module.css";

const Ad = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            <Link to="/" className={styles.adbtn}>X</Link>
            <img className={styles['ad']} src={`${PUBLIC_PATH}/assets/imgs/ad.jpg`} alt="Publicidad" />
        </Fragment>
    );
}

export default Ad;