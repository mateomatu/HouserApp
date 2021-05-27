import React from "react";
import { useParams } from "react-router-dom";
import HousersList from "../components/Services/Housers/HousersList";

const LookForHouserPage = () => {

    const params = useParams();
    const serviceId = params.serviceId;
    //TODO: Llamar a un API que me traiga los datos del servicio de houser

    const backgroundImage = `service-item-info`;
    const titleClass = 'pages-title gibson-semibold w-50';

    return (
    <section className={backgroundImage}>
        <h2 className={"ml-3 mb-5 mt-0 pt-5 " + titleClass}>Service Title</h2>
        <HousersList serviceId={serviceId} />
    </section>
    )
}

export default LookForHouserPage;