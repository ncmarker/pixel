import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/globals.css';  // Legacy or third-party CSS styles
import './styles/main.scss';   // SCSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


