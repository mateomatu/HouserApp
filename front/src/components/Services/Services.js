import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Components 
import ServicesFilter from "./ServicesFilter";
import ServicesList from "./ServicesList";
import Loader from "../UI/Loader";

//Services
import serviceServices from "../../services/Services/Service-service";

//Styles
import styles from "./Services.module.css";

const Services = () => {

    const [filteredService, setFilteredService] = useState("");
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const serviceFilterHandler = (filter) => {
        setFilteredService(filter);
    }

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const data = await serviceServices.allServices();

            const loadedServices = [];

            data.forEach(service => {
                loadedServices.push({
                    id: service.id_service,
                    title: service.title,
                    img: service.img,  
                    alt: service.alt
                })
            });        
            
            setServices(loadedServices);
            setIsLoading(false)

            return () => {
                serviceServices.unsubscribe.allServices();
            }
        })().catch(err => console.log("ERROR AL TRAER SERVICIOS"))
    }, [])

    const titleClass = `ml-2 ${styles['service-title']} pages-title gibson-semibold`;
    const servicesFiltered = services.filter(service => { return service.title.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(filteredService.toUpperCase()); })
    return (
        <section>
            <ServicesFilter onFilterServices={serviceFilterHandler} />
            <h2 className={titleClass}>SERVICIOS</h2>
            <Link to="/home/all" className={styles['see-all']}>Ver todos</Link>
            { isLoading && <Loader />}
            { !isLoading && <ServicesList services={servicesFiltered} />}
        </section>
    );
}

export default Services; 