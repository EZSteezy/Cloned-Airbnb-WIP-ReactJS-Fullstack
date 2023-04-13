import React from "react";

import "../amenity.css";

const AdmenitiesTable = ({ backendData }) => {
    


    return(
        <div id="table_title" >
            {
                backendData &&
                    <div id="table_grid">
                        <h1 id="table_room">Bathroom</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[4].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[4].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Bedroom and laundry</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[5].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[5].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Entertainment</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[6].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[6].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Heating and cooling</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[7].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[7].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Home safety</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[8].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[8].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Internet and office</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[2].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[2].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Kitchen and dining</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[9].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[9].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Location features</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[14].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[14].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Outdoor</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[3].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[3].symbol}</h3>
                            <img 
                                id="items_img"
                                src={backendData[11].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[11].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Parking Facilities</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[12].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[12].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Services</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[13].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_name">{backendData[13].symbol}</h3>
                        </div>
                        {/* Section Break */}
                        <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
                        {/* Section Break */}
                        <h1 id="table_room">Not included</h1>
                        <div id="room_items">
                            <img 
                                id="items_img"
                                src={backendData[15].sym_descrip}
                                alt=""
                            />
                            <h3 id="items_not_included">{backendData[15].symbol}</h3>
                        </div>
                    </div>
                
            }
        </div>
    )

}

export default AdmenitiesTable;