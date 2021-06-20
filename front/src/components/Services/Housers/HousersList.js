import React, { useState, useEffect } from "react";

import Loader from "../../UI/Loader";
import Houser from "./HouserCard";
import serviceServices from "../../../services/Services/Service-service";

const HousersList = (props) => {
    
    //TODO: Utilizar el ID del servicio para consultar a la tabla pivot los housers que pertenecen
    //a dicho servicio
    const [isLoading, setIsLoading] = useState(false);
    const [houserUsers, setHouserUsers] = useState([]);
    const serviceId = props.serviceId;

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const data = await serviceServices.bringHousersByService(serviceId);

            const loadedHousers = [];

            data.forEach(houser => {
                loadedHousers.push({
                    id: houser.id_user,
                    desc: houser.quote,
                    avatar: houser.avatar,
                    name: houser.name,
                    portrait: houser.portrait,
                    lastname: houser.lastname
                })
            });  
            
            setHouserUsers(loadedHousers);
            setIsLoading(false)
        })().catch(err => console.log("Error al traer housers"))
    }, [serviceId])

    const housers = houserUsers.map(houser=>{ return <Houser key={houser.id} houser={houser} />});

    if (housers.length === 0) {
        //TODO: Componente de no hay housers por mostrar!
    }

    return (
        <ul className="housers-list">
            { !isLoading && housers}
            { isLoading && <Loader />}
        </ul>
    )
        

}

export default HousersList;