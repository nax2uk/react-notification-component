import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notification from '../components/Notification';

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, { ...action.payload }];
            case "REMOVE_NOTIFICATION":
                return state.filter(elem => elem.id !== action.id);
            default: return state;

        }
    }, [
        {
            id: uuidv4(),
            type: "SUCCESS",
            msg: "Hello World"
        },
        {
            id: uuidv4(),
            type: "SUCCESS",
            msg: "Hello World 2"
        }
    ]);

    return (
        <div>
            <div className={"notification-wrapper"}>
                {state.map(notification =>
                    <Notification dispatch={dispatch} key={notification.id} {...notification} />)}
            </div>
            {props.children}
        </div>
    )
};

export default NotificationProvider;