import React, { useRef } from "react";

import styles from "./ServicesFilter.module.css";

const ServicesFilter = props => {

    const filterRef = useRef();

    const filterHandler = () => {
        props.onFilterServices(filterRef.current.value);
    }

    const titleClass = `${styles['services-filter']} gibson-semibold`;

    return (
        <div className={titleClass}>
            <input ref={filterRef} onChange={filterHandler} maxLength={50} placeholder="Buscar servicio"></input>
        </div>
    );
}

export default ServicesFilter;