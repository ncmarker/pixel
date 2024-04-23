import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';   // SCSS styles
import './index.css'

// require('dotenv').config()

//import './styles/globals.css';  // Legacy or third-party CSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode> 
);


