import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NotificationProvider from './context/NotificationProvider';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
