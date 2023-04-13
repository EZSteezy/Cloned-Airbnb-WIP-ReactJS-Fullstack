import React from "react";
import ReactDOM from "react-dom";
import "../nl-components.css";

const SaveModal = ({ children, open, onClose }) => {

    if(!open) return null;

    return ReactDOM.createPortal(
        <>
            <div id="overlay_globe" />
            <div id="globeModal">
                <button
                    onClick={onClose}
                    id='globe_close'
                >
                    X
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
    
};

export default SaveModal;