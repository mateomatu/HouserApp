import React from "react";

import { Link } from "react-router-dom";

import styles from "./HouserCard.module.css";

const publicPath = process.env.PUBLIC_URL;
const cardStlyes = `mb-5 ${styles['houser-card']}`

const HouserCard = props => {
    
    const houser = props.houser;
    //const stars = houser.stars;

    return (
        <li>
            <Link to="/">
                <article className={cardStlyes}>
                    <header className={styles['profile-header']}>
                        <img className={styles['houser-avatar']} src={`${publicPath}/assets/imgs/${houser.avatar}`} alt={houser.alt}/>
                    </header>
                    <h3>{houser.name + " " + houser.lastname}</h3>
                    <section className={styles.valoration}>
                        <p>Aca van las estrellitas :3</p>
{/*                         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                            <g>
                                <path d="M485.2,232.4c0.3-0.3,0.1-0.5-0.1-0.5l-142.5-20.6c-0.4,0-0.8-0.4-0.9-0.6L278,81.4
                                    c-0.1-0.3-0.4-0.3-0.5,0l-63.7,129.2c-0.1,0.3-0.5,0.6-0.9,0.6L70.2,231.9c-0.4,0-0.4,0.3-0.1,0.5l103.1,100.6
                                    c0.3,0.3,0.4,0.8,0.4,1l-24.3,142c0,0.4,0.1,0.5,0.5,0.4l127.4-67c0.3-0.1,0.8-0.1,1.1,0l127.4,67c0.3,0.1,0.5,0,0.5-0.4
                                    l-24.4-142c0-0.4,0.1-0.8,0.4-1L485.2,232.4z"/>
                            </g>
                        </svg>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                            <g>
                                <path d="M485.2,232.4c0.3-0.3,0.1-0.5-0.1-0.5l-142.5-20.6c-0.4,0-0.8-0.4-0.9-0.6L278,81.4
                                    c-0.1-0.3-0.4-0.3-0.5,0l-63.7,129.2c-0.1,0.3-0.5,0.6-0.9,0.6L70.2,231.9c-0.4,0-0.4,0.3-0.1,0.5l103.1,100.6
                                    c0.3,0.3,0.4,0.8,0.4,1l-24.3,142c0,0.4,0.1,0.5,0.5,0.4l127.4-67c0.3-0.1,0.8-0.1,1.1,0l127.4,67c0.3,0.1,0.5,0,0.5-0.4
                                    l-24.4-142c0-0.4,0.1-0.8,0.4-1L485.2,232.4z"/>
                            </g>
                        </svg>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                            <g>
                                <path d="M485.2,232.4c0.3-0.3,0.1-0.5-0.1-0.5l-142.5-20.6c-0.4,0-0.8-0.4-0.9-0.6L278,81.4
                                    c-0.1-0.3-0.4-0.3-0.5,0l-63.7,129.2c-0.1,0.3-0.5,0.6-0.9,0.6L70.2,231.9c-0.4,0-0.4,0.3-0.1,0.5l103.1,100.6
                                    c0.3,0.3,0.4,0.8,0.4,1l-24.3,142c0,0.4,0.1,0.5,0.5,0.4l127.4-67c0.3-0.1,0.8-0.1,1.1,0l127.4,67c0.3,0.1,0.5,0,0.5-0.4
                                    l-24.4-142c0-0.4,0.1-0.8,0.4-1L485.2,232.4z"/>
                            </g>
                        </svg>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                            <g>
                                <path d="M485.2,232.4c0.3-0.3,0.1-0.5-0.1-0.5l-142.5-20.6c-0.4,0-0.8-0.4-0.9-0.6L278,81.4
                                    c-0.1-0.3-0.4-0.3-0.5,0l-63.7,129.2c-0.1,0.3-0.5,0.6-0.9,0.6L70.2,231.9c-0.4,0-0.4,0.3-0.1,0.5l103.1,100.6
                                    c0.3,0.3,0.4,0.8,0.4,1l-24.3,142c0,0.4,0.1,0.5,0.5,0.4l127.4-67c0.3-0.1,0.8-0.1,1.1,0l127.4,67c0.3,0.1,0.5,0,0.5-0.4
                                    l-24.4-142c0-0.4,0.1-0.8,0.4-1L485.2,232.4z"/>
                            </g>
                        </svg> */}
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