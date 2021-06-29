import React, { Fragment } from "react";

import NotificationList from "./NotificationList";

const Notifications = () => {

    return (
        <Fragment>
            <h2 className={"ml-2 pages-title gibson-semibold"}>NOTIFICACIONES</h2>
            <NotificationList />
        </Fragment>
    );
}

export default Notifications;