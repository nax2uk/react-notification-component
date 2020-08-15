import React, { useReducer, useContext, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notification from '../components/Notification';

const NotificationContext = createContext()
const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, { ...action.payload }];
            case "REMOVE_NOTIFICATION":
                return state.filter(elem => elem.id !== action.id);
            default: return state;
        }
    }, []);

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className={"notification__wrapper"}>
                {state.map(notification =>
                    <Notification dispatch={dispatch} key={notification.id} {...notification} />)}
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
};

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);
    return (props) => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: uuidv4(),
                ...props
            }
        })
    }
}
export default NotificationProvider;