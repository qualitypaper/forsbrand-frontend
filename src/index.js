import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'macro-css';
import App from './components/app/App';
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter />
        <Suspense fallback={<div className="w-full h-screen flex justify-center items-center bg-base-100">
            <Spin />
        </div>}>
            <App />
        </Suspense>
        <BrowserRouter />
    </React.StrictMode>
);
