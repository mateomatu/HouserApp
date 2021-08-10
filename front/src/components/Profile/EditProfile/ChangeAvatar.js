import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./ChangeAvatar.module.css";

import AuthService, { AuthContext } from "../../../services/User/User-service";
import useToastContext from "../../../hooks/useToastContext";

import Loader from "../../UI/Loader";


const ChangeAvatar = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const inputFile = useRef(null);

    const authCtx = useContext(AuthContext);
    const userId = authCtx.user.id_user;
    const addToast = useToastContext();

    const fileChangeHandler = (e) => {
        const imgFile = e.target.files[0]
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            const codeImg = reader.result;
            setSelectedFile(codeImg);
        });
        reader.readAsDataURL(imgFile);
    }

    const uploadImageHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        
        (async () => {
            const response = await AuthService.getUserData(userId);
            const userData = {
                ...response,
                avatar: selectedFile
            }

            
            const res = await AuthService.editAvatar(userData);
            const nameFile = res.data.avatar;
            const authData = {
                ...response,
                avatar: nameFile
            }
            
            authCtx.updateAuthState(authData);
            if (res.success) {
                setIsLoading(false);
                addToast(`✅ Se ha editado tu avatar con éxito`);
                setSelectedFile(null);
            } else {
                setIsLoading(false);
                setSelectedFile(null);
                addToast(`⛔ Ha ocurrido un error, intenta más tarde`)    
            }

        })().catch(err => console.log("Hubo un error al traer las órdenes"))
    }

    return (
        <section className={styles.profile}>
            <section className={styles['profile-data']}>
                <Link to="/profile" className="primary-color bold">{"< Volver"}</Link>
                <h2 className="mt-4 mb-2">Cambiar imágen de perfil</h2>
                { !isLoading && <form onSubmit={uploadImageHandler} className={styles.avatarform} encType="multipart/form-data">
                    <input className="form-control-file" type="file" id="imagen" ref={inputFile} onChange={fileChangeHandler} />
                    <label htmlFor="imagen" className={selectedFile && styles.imgfile}>Buscar foto</label>
                    { selectedFile && <span className={styles.charged}>¡Imágen seleccionada!</span>}
                    <button className={`gibson-medium ${styles.btnconfirm}`}>Confirmar</button>
                </form>}
                { isLoading && <Loader />}
            </section>
        </section>
    );
}

export default ChangeAvatar