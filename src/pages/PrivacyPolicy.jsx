import React from 'react'
import {Footer} from "../components/mainpage/footer";
import PrivacyPolicyComponent from "../components/privacypolicy/PrivacyPolicyComponent";


const PrivacyPolicy = () => {
    return (
        <div className="mid">
            <div className="mid_background2">
                <div className="one1">
                    <PrivacyPolicyComponent />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PrivacyPolicy

