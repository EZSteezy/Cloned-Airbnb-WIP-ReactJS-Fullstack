import React, { useState } from "react";
import "../map.css";

import MapModal from "./map-modal";
import LocationModal from "./location-modal";
import MapPopup from "./map-popup";


const Location = ({ positions, setPositions }) => {
   
    const [mapOpen, setMapOpen] = useState(false);

    return (

        <div id='location_container'>
            <h1 id="place_text">Where you'll be</h1>
            <MapModal
                positions={positions}
                setPositions={setPositions}
            />
            <h1 id="place_title">City,State,Country</h1>
            <h3 id="place_descrip">
                We live in the old growth forest on a two-acre property. Rattlesnake Lake is only a few miles up the road where there is plenty of water play and many hiking options. Just a few miles away there are plenty of hikes and places to mountain bike. The ski resort, The Summit at Snoqualmie, is only 20 minutes away...
            </h3>
            <div className="btnWrapper">
                <button
                    id="mapBtn"
                    onClick={() => setMapOpen(true)}
                >
                    Show more &gt;
                </button>
                <MapPopup
                    mapOpen={mapOpen}
                    onClose={() => setMapOpen(false)}
                >
                    <LocationModal 
                        positions={positions}
                        setPositions={setPositions}
                    />
                </MapPopup>
            </div>
        </div>
    )

};

export default Location;


/*

    Add to to App.js --> 
        import Location from './components/nl-l2-location';
    
        const [positions, setPositions] = useState([46.189091, -123.834709]);


        <Location 
            positions={positions} 
            setPositions={setPositions}
        />
    
        
    Add to index.html -->

        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
            crossorigin=""
        />

       <div id="portal"></div> 


*/