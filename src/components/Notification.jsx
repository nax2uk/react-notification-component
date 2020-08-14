import React, { useState, useEffect } from 'react';

const Notification = (props) => {
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => prev < 100 ? prev + 0.5 : prev);

        }, 20);
        setIntervalId(id);
    }
    const handlePauseTimer = () => {
        clearInterval(intervalId);
    }
    useEffect(() => {
        handleStartTimer();
    }, [])
    return (
        <div
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={`notification-item ${props.type === "SUCCESS" ? "success" : "error"}`}>

            <p>{props.msg}</p>
            <div className={"bar"} style={{ width: `${width}%` }} />
        </div >
    );
};

export default Notification;