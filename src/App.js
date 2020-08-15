import React, { useState } from 'react';
import { useNotification } from './context/NotificationProvider';
import './App.css';

function App() {
  const dispatch = useNotification();
  const [inputText, setInputText] = useState("");
  const [notificationType, setNotificationType] = useState("SUCCESS");

  const handleAddNotification = () => {
    dispatch({
      msg: inputText,
      type: notificationType,
    })
    setInputText("");
  }

  return (
    <div className="app">
      <input className="notification__text" placeholder="Notification Type" type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
      <select className="notification__type" onChange={e => setNotificationType(e.target.value)}>
        <option value="SUCCESS">success</option>
        <option value="ERROR">error</option>
      </select>
      <button onClick={handleAddNotification}>Add Notification</button>
    </div>
  );
}

export default App;
