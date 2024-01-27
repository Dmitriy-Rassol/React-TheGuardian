import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
