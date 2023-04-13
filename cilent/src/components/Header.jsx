import React, { useState, useEffect } from "react";


import Logo from "./header_components/Logo.jsx";
import SearchBar from './header_components/searchbar_main';
import Becomehost from "./header_components/Becomehost.jsx";
import GlobeBtn from './header_components/globebtn_header_main';
import LogInButton from './header_components/login-main';


const Header = ({ signedIn, setSignedIn, lanData, setLanData, currData, 
    setCurrData, setCurrentLan, setCurrentCurrency }) => {
    
        // .mainheader {  
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //     height: 80px;
        //     background-color: #fff;
        //     max-width: 1080px
            
        //   }

    return (
        <center>
            <div id="mainheader"
                className="mainheader">
                <Logo />
                <div id="maincenter">
                    <SearchBar />
                </div>
                <div id="mainrightside">
                    <Becomehost />
                    <GlobeBtn
                        lanData={lanData}
                        setLanData={setLanData}
                        currData={currData}
                        setCurrData={setCurrData}
                        setCurrentLan={setCurrentLan}
                        setCurrentCurrency={setCurrentCurrency}
                    />
                    <LogInButton
                        signedIn={signedIn}
                        setSignedIn={setSignedIn}
                    />
                </div>
            </div>
        </center>
    )

}

export default Header;