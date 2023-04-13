import React from "react";
import ReactDom from "react-dom";

import "./login.css";

const LogInModalTwo = ({ children, open, onClose }) => {
    
    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div id="overlay_globe" />
            <div id="winModal" >
                <button
                    onClick={onClose}
                    id="win_close"
                >
                    X
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default LogInModalTwo;