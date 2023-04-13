import React from "react";
import ReactDOM from "react-dom";

import "../footer-lower.css";

const FooterLanModal = ({ children, open, onClose } ) => {
   
    if(!open) return null;

   return ReactDOM.createPortal(

        <>
            <div id="overlay_globe" />
            <div id="footer_modal">
                <button
                    onClick={onClose}
                    id="globe_close"
                >
                    X
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    ) 

}

export default FooterLanModal;