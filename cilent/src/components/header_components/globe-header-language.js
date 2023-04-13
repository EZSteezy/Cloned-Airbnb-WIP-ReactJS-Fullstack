import React from "react";
import "../nl-components.css"; //cilent/src/nl-components.css

const LanguageModal = ({ lanData, setCurrentLan, setFooterLan, setIsOpen }) => {

    const translationImg = "https://static.thenounproject.com/png/2484333-200.png";
    
    const newLanSelected = (selectedLan) => {
        console.log(selectedLan);
        setCurrentLan(selectedLan);
        
        if (setFooterLan){
            setFooterLan(false);
        }

        if(setIsOpen){
            setIsOpen(false);
        }
    }
    
    return (
        <div >
            <div id="tabLarSep" />
            <div id="translation">
                <div id="t_holder">
                    <h1 id="t_title">Translation
                        <img 
                            id="t_img"
                            src={translationImg}
                            alt="../img/Translation.png"
                        />
                    </h1>
                    <h3 id="t_descrip">
                        Automatically translate descriptions and reviews to English.
                    </h3>
                </div>
                <button id="lanCheck">Check</button>
            </div> 
            <div id="tabMedSep" />
            <h1 id="selection_title">
                Choose a language and region
            </h1>
            <div id="lan_grid">
                {
                    lanData && (
                        Object.values(lanData).map((region) => 
                            <button
                                key={region.lan_id}
                                id="regionBtn"
                                onClick={() => newLanSelected(region.lan_symbol)}
                            >
                                {region.lan_type}
                                <h3 id="region_title">{region.lan_country}</h3>
                            </button>
                        )
                    )
                }
            </div>
        </div>
    )

};

export default LanguageModal;

/*

    APP.js --> ADD --> const [currentLan, setCurrentLan] = useState('English (US)');

    LanugageModel CSS Styling (styling is current as of 2026 7APR23)

    #tabLarSep{
        height: 70px;
    }

    #tabMedSep{
        height: 50px;
    }

    #translation{
        background-color: lightgray;
        display: flex;
        border-radius: 10px;
        width: 450px;
    }

    #t_title{
        font-size: 20px;
    }

    #t_img{
        height: 20px;
        width: 20px;
    }

    #lanCheck{
        position: relative;
        left: 90px;
        top: 10px;
        border-radius: 100%;
        height: 50px;
    }

    #t_descrip{
        font-size: 10px;
    }

    #selection_title{
        font-size: 30px;
        padding-bottom: 30px;
    }

    #lan_grid{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 50px;
    }

    #regionBtn{
        height: 50px;
        width: 150px;
        border-radius: 10px;
        background: none;
        text-align: left;
        font-size: 15px;
        font-weight: bold;
    }

    #region_title{
        font-size: 10px;
        padding-top: 0;
        padding-bottom: 10px;
    }

*/