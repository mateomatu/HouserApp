import React, { useContext, useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

import AuthService from "../../services/User/User-service";

//Constants
import { API_IMGS } from "../../constants/api"

//Components
import Loader from "../UI/Loader";

//Services
import { AuthContext } from "../../services/User/User-service";

//Styles
import styles from "./UserProfile.module.css";



const UserProfile = () => {
    const [userLogged, setUserLogged] = useState({})
    
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const response = await AuthService.getUserData(authCtx.user.id_user);

            setUserLogged(response);

        })().catch(err => console.log("Hubo un error al traer las órdenes"))

    }, [])

    return (
    <Switch>
        <Route path="/profile" exact>
            <section className={styles.profile}>
                <header className={styles['profile-header']}>
                    { userLogged.avatar !== undefined && <Link to="/profile/change-avatar"><img className={styles.photo} src={`${API_IMGS}/${userLogged.avatar}`} alt={`${userLogged.alt}`} /><div className={styles.penavatars}></div></Link>}
                    { userLogged.avatar === undefined && <Loader />}
                </header>
                <section className={styles['profile-data']}>
                    <ul>
                        <li className={styles['user-data']}>
                            <h3>Nombre y Apellido</h3>
                            <p>{userLogged.name + " " + userLogged.lastname}</p>
                        </li>
                        <li className={styles['user-data']}>
                            <h3>Email</h3>
                            <p>{userLogged.email}</p>
                        </li>
                        <li className={styles['user-data']}>
                            <Link to="/profile/change-address">
                                <div className={styles['user-info-item']}>
                                    <h3>Domicilio</h3>
                                    <p>{userLogged.address}</p>
                                </div>
                                <span className={styles['user-data-icon']}>{'>'}</span>
                            </Link>
                        </li>
                        <li className={styles['user-data']}>
                            <Link to="/profile/change-telephone">
                                <div className={styles['user-info-item']}>
                                    <h3>Teléfono</h3>
                                    <p>{userLogged.telephone}</p>
                                </div>
                                <span className={styles['user-data-icon']}>{'>'}</span>
                            </Link>
                        </li>
                        <li className={styles['user-data']}>
                            <Link to="/profile/change-password">
                                <div className={styles['user-info-item']}>
                                    <h3>Contraseña</h3>
                                    <p>***************</p>
                                </div>
                                <span className={styles['user-data-icon']}>{'>'}</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </section>
        </Route>
        <Route path="/profile/change-address">

        </Route>
        <Route path="/profile/change-password">

        </Route>
    </Switch>
    );
}

export default UserProfile;