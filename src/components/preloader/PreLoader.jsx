import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo_white.png';
import './preloader.scss';

const PreLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the preloader has already been shown
        const preloaderShown = sessionStorage.getItem('preloaderShown');

        if (!preloaderShown) {
            const preLoaderAnim = () => {
                setLoading(!loading);
                setTimeout(() => {
                    setLoading(true);
                    // Set sessionStorage to indicate that the preloader has been shown
                    sessionStorage.setItem('preloaderShown', true);
                }, 5000);
            };

            preLoaderAnim();
        }
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
