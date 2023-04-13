import React from "react";
import ReactDOM from 'react-dom';

import "../amenity.css";

 
const AmenitiesModal = ({ children, open, onClose }) => {
   
   if(!open) return null;
    return ReactDOM.createPortal(

        <>
            <div id="overlay_amenity" />
            <div id="amentity_modal">
                <button 
                    onClick={onClose}
                    id="amenity_close"
                >
                    X
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')

    ) 

}

export default AmenitiesModal;