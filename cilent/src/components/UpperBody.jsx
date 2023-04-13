import React, { useState, useEffect } from "react";
import './styles.css'

import SaveBtn from './upper_body/savebtn-upperbody';
import Houseinfo from "./upper_body/Houseinfo.jsx";
import Mainpics from "./upper_body/Mainpics.jsx";


const UpperBody = ({ saveFav, setSaveFav, signedIn, setSignedIn }) => {
    
    
    return (
        <div id="upper_body" className="upper_body">
            <div className='homeinfocontainer' style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Houseinfo />
                {/* <Sharensave /> */}
                <SaveBtn
                    setSaveFav={setSaveFav}
                    saveFav={saveFav}
                    signedIn={signedIn}
                    setSignedIn={setSignedIn}
                />
            </div>
            <div id={'mainhousepics'}>
                <Mainpics />
            </div>
        </div>
    )

}

export default UpperBody;