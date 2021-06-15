import React from "react"; /* { useState, useEffect } */ 
/* import { useParams } from "react-router"; */

import Houser from "./HouserCard";

/* import serviceServices from "../../../services/Services/Service-service"; */



const DUMMY_HOUSERS = [
    {
        id: 20,
        name: 'Laura',
        lastname: 'Reggiano',
        avatar: 'perfil1.jpg',
        alt: 'perfil',
        rol: 'houser',
        portrait: 'portada1.png',
        desc: 'Responsable y puntual, reparo computadoras hace más de 10 años. Servicio de MAC y Windows 7-10.',
        stars: 4
    },
    {
        id: 21,
        name: 'Damián',
        lastname: 'Velasquio',
        avatar: 'perfil2.jpg',
        alt: 'perfil',
        rol: 'houser',
        portrait: 'portada2.jpg',
        desc: 'Estudiante de ingenieria electrónica. 4 años de experiencia reparando computadoras',
        stars: 3
    }
]

const HousersList = (props) => {
    
    //TODO: Utilizar el ID del servicio para consultar a la tabla pivot los housers que pertenecen
    //a dicho servicio
/*     const [isLoading, setIsLoading] = useState(false);
    const [houserUsers, setHouserUsers] = useState([]);
    const serviceId = props.serviceId; */

/*     useEffect(() => {
        setIsLoading(true);
        (async () => {
            const data = await serviceServices.bringHousersByService(serviceId);

            const loadedHousers = [];

            data.forEach(houser => {
                loadedHousers.push({
                    id: houser.id_user,
                    desc: houser.desc,
                    avatar: houser.avatar,  
                    alt: houser.alt,
                    email: houser.email,
                    portrait: houser.portrait,
                    name: houser.name,
                    lastname: houser.lastname
                })
            });  
            
            setHouserUsers(loadedHousers);
            setIsLoading(false)
        })().catch(err => console.log("ERROR AL TRAER SERVICIOS"))
    }, [serviceId]) */



    const housers = DUMMY_HOUSERS.map(houser=>{ return <Houser key={houser.id} houser={houser} />});

    return (
        <ul className="housers-list">
            {housers}
        </ul>
    )
        

}

export default HousersList;