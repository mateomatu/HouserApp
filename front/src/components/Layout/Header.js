import React, { useContext, useEffect, useState } from "react";
import { PUBLIC_PATH } from "../../constants/api";
import AuthService, { AuthContext } from "../../services/User/User-service";

//Constants
import { API_IMGS } from "../../constants/api";

import styles from "./Header.module.css";
import Loader from "../UI/Loader";

const Header = props => {

    const authCtx = useContext(AuthContext);
    const [userLogged, setUserLogged] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const onClickProfileButton = () => {
        props.onOpenSidebar(true);
    }

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await AuthService.getUserData(authCtx.user.id_user);
            if (response) {
                setIsLoading(false)
                setUserLogged(response);
            } else {
                setIsLoading(false);
            }


        })().catch(err => console.log("Hubo un error al traer las órdenes"))

    }, [authCtx])

        return (
            <header className={styles['app-header']}>
            { !isLoading && userLogged.id_usuario !== null && <img onClick={onClickProfileButton} className={styles['burger-menu-img']} src={`${API_IMGS}/${userLogged.avatar}`} alt={`${userLogged.alt}`} />}
            <h1 id="logo">
                <img src={`${PUBLIC_PATH}/assets/logo180.png`} alt="logo"/>
            </h1>
        </header>
    )
}
    

export default Header;