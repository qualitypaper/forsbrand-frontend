import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo_white.png';
import './preloader.scss';

const PreLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const preLoaderAnim = () => {
            setLoading(!loading);
            setTimeout(() => {
                setLoading(true);
            }, 5000);
            sessionStorage.setItem('logo', false);
        };

        preLoaderAnim();
    }, []);

    return (
        <div className={`preloader ${loading ? 'loading' : ''}`}>
            <div className="preloader-images">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default PreLoader;