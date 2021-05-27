import React from "react";
import NotificationList from "../components/Notifications/NotificationList";

const NotificationsPage = () => {

    const titleClass = 'pages-title gibson-semibold';

    return (
        <section>
            <h2 className={"ml-2 " + titleClass}>NOTIFICACIONES</h2>
            <NotificationList />
        </section>
    )
};

export default NotificationsPage;