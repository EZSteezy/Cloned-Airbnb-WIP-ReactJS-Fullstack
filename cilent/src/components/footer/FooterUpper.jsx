import React, { useState, useEffect } from "react";

import Thingstoknow from "./Thingstoknow.jsx";
import Hostedby from "./Hostedby.jsx";

const FooterUpper = () => {
    
    
    return (
        <>
            <div>
                <pre><br></br></pre>
                <pre><br></br></pre>
                <Hostedby />
                <pre><br></br></pre>
                <center><div style={{ backgroundColor: '#dadada', width: '1080px', height: '1px' }}></div></center>
                <pre><br></br></pre>
            </div>
            <div id={'thingstoknow'}>
                <Thingstoknow />
            </div>
        </>
    )

}

export default FooterUpper;