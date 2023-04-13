import React, { useState, useEffect } from "react";
import "./map.css";

import Location from './location/location-main';

const LocationSection = ({ positions, setPositions }) => {
    
    
    return (
        <div id="location_section">
            <Location
                positions={positions}
                setPositions={setPositions}
            />
        </div>
    )

}

export default LocationSection;