import React, { useEffect, useState } from "react";

import "../amenity.css";
import AmenitiesModal from "./amenities-modal";
import AdmenitiesTable from "./amenities-table";

 
const AmenitiesHome = () => {

    const [backendData, setBackendData] = useState([{}]);
    const [amenitiesWin, setAmenitiesWin] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch ('https://fec-main.onrender.com/amenities')
            .then(response => response.json()
        )
        setBackendData(response)
    }

    //console.log(backendData);
   
   
    return(

        <div id="amenity_home">
            <div id="amenity_sleep">
                <h1 id="sleep_size">Where you'll sleep</h1>
                <br></br>
                <div id="sleep_accomidation">
                    <img 
                        id="sleep_symbol"
                        src={backendData[0].sym_descrip}
                        alt=""
                    />
                    <h1 id="sleep_room">Bedroom</h1>
                    <h2 id="sleep_type" >1 {backendData[0].symbol}</h2>
                </div>
            </div>
            <pre><br></br></pre>
            <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px' }}></div>
            <pre><br></br></pre>
            <div id="amenity_other">
                <h1 id='other_text' > What this place offers </h1>
                <div id="other_grid">
                    {
                        backendData &&
                        backendData.slice(2,5).map((symbol, index) =>
                            <h3 
                                key={index}
                                id="symbol_text"
                            >
                                <img 
                                    id="amenity_symbol"
                                    src={symbol.sym_descrip}
                                    alt=""
                                />
                                {symbol.symbol}
                            </h3>
                        )
                    }
                </div>
                <div className="btnWrapper">
                    <button
                        onClick={() => setAmenitiesWin(true)}
                        id="amenityBtn"
                    >
                        Show all amenities
                    </button>
                    <AmenitiesModal
                        open={amenitiesWin}
                        onClose={() => setAmenitiesWin(false)}
                    >
                        <AdmenitiesTable 
                            backendData={backendData}
                        />
                        {/* Hi World */}
                    </AmenitiesModal>
                </div>
            </div>
        </div>

    ) 

}

export default AmenitiesHome;