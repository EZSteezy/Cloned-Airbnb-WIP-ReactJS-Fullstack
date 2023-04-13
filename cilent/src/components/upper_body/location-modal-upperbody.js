import React from "react";
import ReactDOM from "react-dom";
import "../map.css";

const LocationModalUB = ({ children, mapOpen, onClose }) => {
    
    if(!mapOpen) return null;
    return ReactDOM.createPortal(
        <>
            <div id="overlay_map" />
            <div id="mapModal" >
                <button
                    id="map_closeBtn"
                    onClick={onClose}
                >
                    &lt;
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default LocationModalUB;