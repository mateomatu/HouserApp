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
                { userLogged && <section className={styles['profile-data']}>
                    <ul>
                        <li className={styles['user-data']}>
                            <h3>Nombre y Apellido</h3>
                            { userLogged.name && <p>{userLogged.name + " " + userLogged.lastname}</p>}
                            { !userLogged.name && <Loader />}
                        </li>
                        <li className={styles['user-data']}>
                            <h3>Email</h3>
                            { userLogged.email && <p>{userLogged.email}</p>}
                            { !userLogged.email && <Loader />}
                        </li>
                        <li className={styles['user-data']}>
                            <Link to="/profile/change-address">
                                <div className={styles['user-info-item']}>
                                    <h3>Domicilio</h3>
                                    { userLogged.address && <p>{userLogged.address}</p>}
                                    { !userLogged.address && <Loader />}
                                </div>
                                <span className={styles['user-data-icon']}>{'>'}</span>
                            </Link>
                        </li>
                        <li className={styles['user-data']}>
                            <Link to="/profile/change-telephone">
                                <div className={styles['user-info-item']}>
                                    <h3>Teléfono</h3>
                                    { userLogged.telephone && <p>{userLogged.telephone}</p>}
                                    { !userLogged.telephone && <Loader />}
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
                </section>}
                { !userLogged && <p>No se han encontrado datos del usuario, cierre sesión y vuelva a ingresar</p>}
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