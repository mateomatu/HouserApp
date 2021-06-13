import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Constants
import { API_IMGS } from "../../constants/api"

//Components
import Loader from "../UI/Loader";

//Services
import { AuthContext } from "../../services/User/User-service";

//Styles
import styles from "./UserProfile.module.css";


const UserProfile = () => {

    /* const [user, setUser] = useState([]); */
    const authCtx = useContext(AuthContext);


/*     useEffect(() => {
        const getUserData = () => {
            const userData = {
                id: authCtx.user.id_user,
                name: authCtx.user.name,
                lastname: authCtx.user.lastname,
                address: authCtx.user.address,
                email: authCtx.user.email,
                avatar: authCtx.user.avatar,
                alt: authCtx.user.alt
            };
            setUser(userData);
        }
        getUserData();
    }, []) */

    return (
        <section className={styles.profile}>
            <header className={styles['profile-header']}>
                { authCtx.user.avatar !== undefined && <img className={styles.photo} src={`${API_IMGS}/${authCtx.user.avatar}`} alt={`${authCtx.user.alt}`} />}
                { authCtx.user.avatar === undefined && <Loader />}
            </header>
            <section className={styles['profile-data']}>
                <ul>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Nombre y Apellido</h3>
                                <p>{authCtx.user.name + " " + authCtx.user.lastname}</p>
                            </div>
                            <span className={styles['user-data-icon']}>{'>'}</span>
                        </Link>
                    </li>
                    <li className={styles['user-data']}>
                        <h3>Email</h3>
                        <p>{authCtx.user.email}</p>
                    </li>
                    <li className={styles['user-data']}>
                        <Link to="/">
                            <div className={styles['user-info-item']}>
                                <h3>Domicilio</h3>
                                <p>{authCtx.user.address}</p>
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
                </ul>
            </section>
        </section>
    );
}

export default UserProfile;