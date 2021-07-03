import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

import AuthService from "../../../services/User/User-service";

import Loader from "../../UI/Loader";

import { API_IMGS } from "../../../constants/api";
import { PUBLIC_PATH } from "../../../constants/api";

import styles from "./HouserInfo.module.css";



const HouserInfo = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [houser, setHouser] = useState({});

    const params = useParams();
    const houserId = params.houserId;
    const serviceId = params.serviceId;


    useEffect(() => {
        (async () => {
            const data = await AuthService.getUserData(houserId);

            const houser = data;

            console.log(houser);
            
            setHouser(houser);
            setIsLoading(false)
        })().catch(err => console.log("Error al traer housers"))
    }, [houserId])

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <Fragment>
                <header className={styles['profile-header']}>
                    { houser.portrait !== undefined && houser.portrait !== null && <img className={styles['img-portrait']} src={`${API_IMGS}/${houser.portrait}`} alt={houser.alt}/>}
                    { houser.avatar !== undefined && <img className={styles.photo} src={`${API_IMGS}/${houser?.avatar}`} alt={`${houser.alt}`} />}
                </header>
                <section className="stars">
                <h2>{houser.name + " " + houser.lastname}</h2>
                    <p>Aca van las estrellitas</p>
                </section>
                <section className={styles['houser-content']}>
                    <h2>Información General</h2>
                    <p>{houser.quote}</p>
                    <p className="mt-3"><b>Teléfono:</b> {houser.telephone}</p>
                    <p><b>Ubicación:</b> {houser.address}</p>
                    <img className={styles['google-maps']} src={`${PUBLIC_PATH}/assets/imgs/address.png`} alt="google maps"></img>
                    <Link to={`/contact-houser/${houserId}/${serviceId}`} className={`gibson-medium houser-button mb-5 button`}>Contactar Houser</Link>
                </section>
            </Fragment>
        );
    }

}

export default HouserInfo;