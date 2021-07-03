import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";

import AuthService, { AuthContext } from "../../../services/User/User-service";

import Loader from "../../UI/Loader";

import { API_IMGS } from "../../../constants/api";
import { PUBLIC_PATH } from "../../../constants/api";


import styles from "./ContactHouser.module.css";
import OrderService from "../../../services/Orders/Order-service";

const ContactHouser = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [houser, setHouser] = useState({});

    const textAreaInputRef = useRef();
    const history = useHistory();

    const params = useParams();
    const houserId = params.houserId;
    const serviceId = params.serviceId;

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const data = await AuthService.getUserData(houserId);

            const houser = data;
            
            setHouser(houser);
            setIsLoading(false)
        })().catch(err => console.log("Error al traer housers"))
    }, [houserId])

    if (isLoading) {
        return <Loader />
    }

    const submitContact = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const enteredMessage = textAreaInputRef.current.value;
        const userId = authCtx.user.id_user;
        const houserId = houser.id_user;

        const data = {
            fk_user: userId,
            fk_houser: houserId,
            user_message: enteredMessage,
            fk_service: serviceId
        }

        const response = await OrderService.generateOrder(data);
        console.log("contacthouser: ", response);

        // IF RESPONSE.OK HAGO EL HISTORY PUSH AL OK
        // IF RESPONSE.FAIL HAGO EL HISTORY PUSH AL FAIL
        setIsLoading(false);
        history.push(`/contact-houser/ok`);




    }

    return (
        <section className={styles['contact-houser']}>
            { houser.avatar !== undefined && <img className={styles.photo} src={`${API_IMGS}/${houser?.avatar}`} alt={`${houser.alt}`} />}
            <h2 className="mt-1 pages-title text-center gibson-semibold">¡Estás a un paso de contactar a {`${houser.name} ${houser.lastname}`}!</h2>
            <svg className={`${styles['svg-mail']} ${styles['contact-houser-svg']}`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                <g>
                    <path d="M498.5,81.6L326.4,232.1l173.2,183.7c0.3-1.1,0.5-2.3,0.5-3.5V87.7C499.9,85.5,499.4,83.5,498.5,81.6z"/>
                    <path d="M485.9,73.1c-0.3,0-0.4,0-0.6,0H14.7c-0.3,0-0.4,0-0.6,0.1L250,279.4L485.9,73.1z"/>
                    <path d="M254.9,294.6c-1.4,1.3-3.1,1.8-4.9,1.8s-3.4-0.6-4.9-1.8l-63.3-55.3L7.1,424.8c2.3,1.4,4.8,2.1,7.5,2.1
                        h470.7c2.8,0,5.4-0.9,7.5-2.1L318,239.2L254.9,294.6z"/>
                    <path d="M1.4,81.6c-0.9,1.9-1.4,4-1.4,6.1v324.6c0,1.3,0.3,2.4,0.5,3.5l173.2-183.7L1.4,81.6z"/>
                </g>
            </svg>

{/*             <section className={styles['check-data']}>
                <h3>Verifica tus datos</h3>
                <section className={styles['check-data-container']}>
                    <div className={styles['check-data-item']}>
                        <div className={styles['check-data-item-text']}>
                            <h4>Domicilio</h4>
                            <span>XXX XXX XXX</span>
                        </div>
                        <span>Lapicito</span>
                    </div>
                    <div className={styles['check-data-item']}>
                        <div className={styles['check-data-item-text']}>
                            <h4>Teléfono</h4>
                            <span>11300123123</span>
                        </div>
                        <span>Lapicito</span>
                    </div>
                </section>
            </section> */}
            <section className={styles['send-details']}>
                <h3 className="mt-5 mb-1 text-center">Detalla tu necesidad al Houser</h3>
                <form onSubmit={submitContact}>
                    <textarea ref={textAreaInputRef} className={styles['contact-houser-textarea']}></textarea>
                    <button className={`gibson-medium houser-button mb-5 button`}>Contactar</button>
                </form>
            </section>
        </section>
    )
}

export default ContactHouser;