import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_IMGS } from "../../constants/api"

//Services
import UserService from "../../services/User/User-service";
import Loader from "../UI/Loader";

import styles from "./UserProfile.module.css";


const UserProfile = () => {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const data = await UserService.userData(1);

            console.log(data);

            const userData = {
                id: data.id_user,
                name: data.name,
                lastname: data.lastname,
                address: data.address,
                email: data.email,
                avatar: data.avatar,
                alt: data.alt
            };
            
            setIsLoading(false);
            setUser(userData);
        })().catch(err => console.log("ERROR AL TRAER data del useer"))
    }, [])

    return (
        <section className={styles.profile}>
            <header className={styles['profile-header']}>
                { !isLoading && <img className={styles.photo} src={`${API_IMGS}/${user.avatar}`} alt={`${user.alt}`} />}
            </header>
            <section className={styles['profile-data']}>
                { !isLoading && (<ul>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Nombre y Apellido</h3>
                                <p>{user.name + " " + user.lastname}</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                    <li className={styles['user-data']}>
                        <h3>Email</h3>
                        <p>{user.email}</p>
                    </li>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Domicilio</h3>
                                <p>{user.address}</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Contraseña</h3>
                                <p>***************</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                </ul>)}
                { isLoading && <Loader />}
            </section>
        </section>
    );
}

export default UserProfile;