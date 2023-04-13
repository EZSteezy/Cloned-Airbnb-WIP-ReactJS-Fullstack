import React from "react";


 
const Footer = ({ currentCurrency, currentLan, currData, lanData,
    setCurrentCurrency, setCurrentLan }) => {

   return(

        <div id="footer_main">
            
            <FooterLower 
                currentLan={currentLan}
                currentCurrency={currentCurrency}
                lanData={lanData}
                currData={currData}
                setCurrentLan={setCurrentLan}
                setCurrentCurrency={setCurrentCurrency}
            />
        </div>

   ) 

}

export default Footer;