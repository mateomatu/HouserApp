import React from "react";
import { Link } from "react-router-dom";
import  { API_IMGS } from "../../../constants/api";

import styles from "./HouserCard.module.css";

const cardStlyes = `mb-5 ${styles['houser-card']}`

const HouserCard = props => {
    
    const houser = props.houser;
    
    return (
        <li>
            <Link to={`/houser/${houser.id}/${props.service}`}>
                <article className={cardStlyes}>
                    <header className={styles['profile-header']}>
                        { houser.portrait !== undefined && houser.portrait !== null && <img className={styles['img-portrait']} src={`${API_IMGS}/${houser.portrait}`} alt={houser.alt}/>}
                        <img className={styles['houser-avatar']} src={`${API_IMGS}/${houser.avatar}`} alt={houser.alt}/>
                    </header>
                    <h3>{houser.name + " " + houser.lastname}</h3>
                    <section className={styles.valoration}>
                        <p>Aca van las estrellitas :3</p>
                    </section>
                    <p className={styles['houser-desc']}>
                        {houser.desc}
                    </p>
                </article>
            </Link>
        </li>
    )
}

export default HouserCard;