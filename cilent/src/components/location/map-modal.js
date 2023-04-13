import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from 'leaflet';
import "../map.css";
 
const MapModal = ({ positions }) => {

    const position = positions; //[latitude, longitude]
    const zoomLevel = 15;

    const codingSpot = new Icon ({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/6805/6805897.png',
        iconSize: [70, 70],
        iconAnchor: [40, 60],
        popupAnchor: [-5, -80], //[left/right, //up/down]
    });
    
   
    return (

        <MapContainer
            center={position}
            zoom={zoomLevel}
            scrollWheelZoom={true}
        >
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker 
                position={position}
                icon={codingSpot} 
            >
                <Popup>
                    Exact location provided after booking.
                </Popup>
            </Marker>
        </MapContainer>
    )

};

export default MapModal;