import React from "react";
import Houser from "./HouserCard";



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

const HousersList = props => {
    
    //TODO: Utilizar el ID del servicio para consultar a la tabla pivot los housers que pertenecen
    //a dicho servicio
    const serviceId = props.serviceId;

    const housers = DUMMY_HOUSERS.map(houser=>{ return <Houser key={houser.id} houser={houser} />});

    return (
        <ul className="housers-list">
            {housers}
        </ul>
    )
        

}

export default HousersList;