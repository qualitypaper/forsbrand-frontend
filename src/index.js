import React from 'react';
import ReactDOM from 'react-dom/client';
import 'macro-css';
import App from './components/app/App';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter/>
        <App/>
        <BrowserRouter/>
    </React.StrictMode>
);
