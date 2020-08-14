import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notification from '../components/Notification';

const NotificationProvider = (props) => {
    const notifications = [
        {
            id: uuidv4,
            type: "SUCCESS",
            msg: "Hello World"
        }
    ];
    return (
        <div>
            <div className={"notification-wrapper"}>
                {notifications.map(notification =>
                    <Notification key={notification.id} {...notification} />)}
            </div>
            {props.children}
        </div>
    )
};

export default NotificationProvider;