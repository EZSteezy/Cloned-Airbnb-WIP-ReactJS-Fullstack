import React, {useState, useEffect} from "react";
import "../nl-components.css"; //cilent/src/nl-components.css

import GlobeModal from "./globe_modal_header";
import LanguageModal from "./globe-header-language";
import CurrencyModal from "./globe-header-currency";

const GlobeBtn = ({ lanData, setLanData, currData, 
        setCurrData, setCurrentLan, setCurrentCurrency }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [globeTab, setGlobeTab] = useState(true);
    

    useEffect(() =>{
        getLan();
    }, [])

    const getLan = async () =>{
        const res = await fetch('https://fec-main.onrender.com/language')
            .then(res => res.json()
        )

        setLanData(res)
    }

    useEffect(() =>{
        getCurr();
    }, [])

    const getCurr = async () =>{
        const response = await fetch('https://fec-main.onrender.com/currency')
            .then(response => response.json()
        )

        setCurrData(response)
    }

    const globe = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png'; 

    //console.log('Language Array', lanData);
    //console.log('currency', currData);

    function currClick(){
        //console.log('Currency Selected', currData);
        setGlobeTab(false);
    }

    function lanClick(){
        //console.log('Language Selected', lanData);
        setGlobeTab(true);
    }

    return (
        <div className="btnWrapper" id="globe_div">
            <button 
                id='globeBtn' 
                onClick={() => setIsOpen(true)} 
            >
                <img id='globeBtn' src={globe} alt='../img/globe.png' />
            </button>
            <GlobeModal 
                open={isOpen} 
                onClose={() => setIsOpen(false)}
            >
                <button 
                    id="tab_btn"
                    onClick={lanClick} 
                >
                    Language and region
                </button>
                <button 
                    id="tab_btn"
                    onClick={currClick} 
                >
                    Currency
                </button>
                {globeTab 
                    ? <LanguageModal 
                        lanData={lanData} 
                        setCurrentLan={setCurrentLan}
                        setIsOpen={setIsOpen} 
                    /> 
                    : <CurrencyModal 
                        currData={currData} 
                        setCurrentCurrency={setCurrentCurrency}
                        setIsOpen={setIsOpen}
                    />
                }
            </GlobeModal>
        </div>
    )

};

export default GlobeBtn;



/*

    APP.jsd --> ADD --> 

    function App() {

        const [saveFav, setSaveFav] = useState(false);
        const [lanData, setLanData] = useState([{}]);
        const [currData, setCurrData] = useState([{}]);
        const [currentLan, setCurrentLan] = useState('English (US)');
        const [currentCurrency, setCurrentCurrency] = useState ('$ USD');

        return(
            <div>
            <GlobeBtn 
                lanData={lanData}
                setLanData={setLanData}
                currData={currData}
                setCurrData={setCurrData}
                setCurrentLan={setCurrentLan}
                setCurrentCurrency={setCurrentCurrency}
            />
            <SaveBtn 
                setSaveFav={setSaveFav}
                saveFav={saveFav}
            />
            </div>
        );
        
    }

    export default App;

    CSS Styling for Currency

    #globeBtn{
        height: 20px;
        width: 20px;
        border: none;
        background: none;
        cursor: pointer;
    }

    #globeModal{
        position: fixed;
        width: 800px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFF;
        padding: 50px;
        z-index: 1000;
    }

    #overlay_globe{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
    }

    #globe_close{
        cursor: pointer;
    }

    #tab_btn{
        border: none;
        background: none;
        cursor: pointer;
        margin: 20px;
        font-weight: bold;
        font-size: 20px;
    }

*/