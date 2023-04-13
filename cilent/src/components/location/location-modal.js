import React from "react";
import "../map.css";

import MapModal from "./map-modal";

 
const LocationModal = ({ positions }) => {
   
    return (

        <div id="popup_div">
            <div id="popup_left">
                <h1 id="place_text">Where you'll be hiding</h1>
                <h1 id="place_title">City,State,Country</h1>
                <h3 id="place_descrip">
                    We live in the old growth forest on a two-acre property. Rattlesnake Lake is only a few miles up the road where there is plenty of water play and many hiking options. Just a few miles away there are plenty of hikes and places to mountain bike. The ski resort, The Summit at Snoqualmie, is only 20 minutes away...
                </h3>
                <button id="map_read">
                    Read more &gt;
                </button>
                <h1 id="map_direct">
                    Getting around
                </h1>
                <h3 id="map_info">
                    Having a car is the best way to get around. We have a dedicated parking space for the treehouse and will share those details with you.
                </h3>
                <button id="map_host">
                    Show Host guidebook &gt;
                </button>
            </div>
            <div id="popup_right">
                <MapModal 
                    positions={positions}
                />
            </div>
        </div>
    )

};

export default LocationModal;