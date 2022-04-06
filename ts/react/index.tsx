import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';


import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const rootElement = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <App/>

  // <React.StrictMode>
  // </React.StrictMode>
)