import React, { useState, useEffect } from "react";

import FooterUpper from "./footer/FooterUpper";
import FooterMiddle from './footer/footer-middle';
import FooterLower from './footer/footer-lower';

import "./footer-lower.css";

const Footer = ({ lanData,  currData, setCurrentLan, setCurrentCurrency, 
                        currentCurrency, currentLan}) => {
    
    
    return (
        <>
            <FooterUpper />
            {/* Section Break */}
            <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
            {/* Section Break */}
            <FooterMiddle />
            {/* Section Break */}
            <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
            {/* Section Break */}
            <FooterLower 
              currentLan={currentLan}
              currentCurrency={currentCurrency}
              lanData={lanData}
              currData={currData}
              setCurrentLan={setCurrentLan}
              setCurrentCurrency={setCurrentCurrency}
            />
        </>
    )

}

export default Footer;