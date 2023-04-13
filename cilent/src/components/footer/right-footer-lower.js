import React, { useState } from "react";

import "../footer-lower.css";

import FooterLanModal from "./modal-lan-footerlower";
import LanguageModal from "../header_components/globe-header-language";
import FooterCurrModal from "./modal-curr-footerlower";
import CurrencyModal from "../header_components/globe-header-currency";


const LowerRight = ({ currentCurrency, currentLan, currData, lanData,
    setCurrentCurrency, setCurrentLan }) => {
   
    const [footerLan, setFooterLan] = useState(false);
    const [footerCurrency, setFooterCurrency] = useState(false);

    const globe = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png';

    const faceBook = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3233129/square-facebook-icon-md.png';

    const twitter = 'https://cdn-icons-png.flaticon.com/512/60/60580.png';

    const instagram = 'https://www.svgrepo.com/show/364604/instagram-logo-fill.svg';

    return (
        <div className="lower_right">
            <div className="footer_wrapper">
                <button 
                    id='footerLanBtn'
                    onClick={() => setFooterLan(true)}
                >
                    <img 
                        src={globe}
                        id="footer_globe"
                        alt=''
                    />
                    {currentLan}
                </button>
                <FooterLanModal
                    open={footerLan}
                    onClose={() => setFooterLan(false)}
                >
                    <LanguageModal 
                        lanData={lanData}
                        setCurrentLan={setCurrentLan}
                        setFooterLan={setFooterLan}
                    />
                </FooterLanModal>
            </div>
            <div className="footer_wrapper">
                <button
                    id="footerCurrBtn"
                    onClick={() => setFooterCurrency(true)}
                >
                    {currentCurrency}
                </button>
                <FooterCurrModal
                    open={footerCurrency}
                    onClose={() => setFooterCurrency(false)}
                >
                    <CurrencyModal 
                        currData={currData}
                        setCurrentCurrency={setCurrentCurrency}
                        setFooterCurrency={setFooterCurrency}
                    />
                </FooterCurrModal>
            </div>
            <button
                id='siteBtn'
            >
                <img 
                    src={faceBook} 
                    id='site_img'
                />
            </button>
            <button
                id='siteBtn'
            >
                <img 
                    src={twitter} 
                    id='site_img'
                />
            </button>
            <button
                id='siteBtn'
            >
                <img 
                    src={instagram} 
                    id='site_img2'
                />
            </button>
        </div>
    ) 

}

export default LowerRight;