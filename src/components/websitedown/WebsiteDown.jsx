import React from 'react';
import "./WebsiteDown.scss";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function WebsiteDown() {
    return (
        <div className="website-down">
            <div className="website-down-content">
                <h1 className="website-down-title">Нажаль ми зараз
                    <h3 className="website-down-title-down"> не працюємо <SentimentVeryDissatisfiedIcon  fontSize="larg"/> </h3></h1>

                <div className="website-down-subtitle">
                    <p className="website-down-subtitle-text">Переходь на наші соціальні мережі:</p>
                    <div className="website-down-social">
                        <button className="website-down-social-item-button-tiktok">
                            <a href="https://www.tiktok.com/@fors.brand?_t=8iuxjoLny3J&_r=1" className="website-down-social-tiktok">Tik Tok</a>
                        </button>
                        <button className="website-down-social-item-button-instagram">
                            <a href="https://www.instagram.com/fors.brand?igsh=MXQ1ZHJwdmtmeDYyYw==" className="website-down-social-instagram">Instagram</a>
                        </button>
                        <button className="website-down-social-item-button-telegram">
                            <a href="https://t.me/forsbrand" className="website-down-social-telegram">Telegram</a>
                        </button>
                    </div>
                </div>
                <div className="website-down-footer-wrapper">
                    <p className="website-down-text-footer">З повагою адміністрація “Forsbrand”</p>
                </div>
            </div>
        </div>
    );
}

export default WebsiteDown;