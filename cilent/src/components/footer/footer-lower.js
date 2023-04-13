import React from "react";

import "../footer-lower.css";
import LowerRight from "./right-footer-lower";



 
const FooterLower = ({ currentCurrency, currentLan, currData, lanData,
    setCurrentCurrency, setCurrentLan }) => {

    
    

    const privacy_choice= 'https://www.affirmfilms.com/wp-content/themes/affirmfilms/images/YourPrivacyChoices.png';


   return(

    <div id="footer_lower">
        <div id='footer_left'>
            <p id="footer_note"> &copy; 2023 Fantasybnb, Inc. &middot; </p>
            <button id="footerBtn"> Terms </button>
            <p id="footer_note"> &middot; </p>
            <button id="footerBtn"> Sitemap </button>
            <p id="footer_note"> &middot; </p>
            <button id="footerBtn"> Privacy </button>
            <p id="footer_note"> &middot; </p>
            <button id="footerBtn_choice"> Your Privacy Choices 
                <img 
                    src={privacy_choice}
                    id="choice_img"
                    alt=""
                />
            </button>
        </div>
        <LowerRight 
            currentCurrency={currentCurrency}
            currentLan={currentLan}
            lanData={lanData}
            currData={currData}
            setCurrentLan={setCurrentLan}
            setCurrentCurrency={setCurrentCurrency}
        />
    </div>

   ) 

}

export default FooterLower;