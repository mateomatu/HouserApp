import React, { useState } from "react";
import { Link } from "react-router-dom";

import ServicesFilter from "./ServicesFilter";
import ServicesList from "./ServicesList";

import styles from "./Services.module.css";

const SERVICES_DUMMY = [
    {
        id: 1,
        title: "Reparación de computadoras",
        img: "servicio-compu.png",
        alt: "Computadora sobre un escritorio para ser reparada"
    },
    {
        id: 2,
        title: "Carpintería",
        img: "carpinteria.jpg",
        alt: "Computadora sobre un escritorio para ser reparada"
    },
    {
        id: 3,
        title: "Pinturería",
        img: "alba.png",
        alt: "Computadora sobre un escritorio para ser reparada"
    },
    {
        id: 4,
        title: "Profesores particulares",
        img: "profe.png",
        alt: "Computadora sobre un escritorio para ser reparada"
    },
    {
        id: 5,
        title: "Flete",
        img: "flete.png",
        alt: "Computadora sobre un escritorio para ser reparada"
    },
    {
        id: 6,
        title: "Aires acondicionados",
        img: "aires.png",
        alt: "Computadora sobre un escritorio para ser reparada"
    }
]

const Services = () => {

    const [filteredService, setFilteredService] = useState("");

    const serviceFilterHandler = (filter) => {
        setFilteredService(filter);
    }

    const titleClass = `ml-2 ${styles['service-title']} pages-title gibson-semibold`;
    const servicesFiltered = SERVICES_DUMMY.filter(service => { return service.title.toUpperCase().includes(filteredService.toUpperCase()); })

    //TODO: Link a la pantalla de ver todos los servicios
    return (
        <section>
            <ServicesFilter onFilterServices={serviceFilterHandler} />
            <h2 className={titleClass}>SERVICIOS</h2>
            <Link to="/" className={styles['see-all']}>Ver todos</Link>
            <ServicesList services={servicesFiltered} />
        </section>
    );
}

export default Services; 