import React, { useState, useEffect } from 'react';

const Notification = (props) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) return 0.5 + prev;
                clearInterval(id);
                return prev;
            });
        }, 20);

        setIntervalId(id);
    }


    const handlePauseTimer = () => {
        clearInterval(intervalId);
    }

    const handleCloseNotification = () => {
        handlePauseTimer();
        setExit(true);
        setTimeout(() => {
            //remove from state 
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                id: props.id,
            })
        }, 400);
    }

    useEffect(() => {
        handleStartTimer();
    }, []);

    useEffect(() => {
        if (width === 100) handleCloseNotification();
    }, [width]);

    return (
        <div
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={`notification-item ${props.type === "SUCCESS" ? "success" : "error"} ${exit ? "exit" : ""}`}>

            <p>{props.msg}</p>
            <div className={"bar"} style={{ width: `${width}% ` }} />
        </div >
    );
};

export default Notification;