import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';       // ↪ make sure this is FIRST so your CSS actually loads
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
