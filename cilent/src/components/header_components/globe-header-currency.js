import React from "react";
import "../nl-components.css"; //cilent/src/nl-components.css

const CurrencyModal = ({ currData, setCurrentCurrency, setIsOpen,       
            setFooterCurrency }) => {

    const newCurrencySelected = (selectedCurr) => {
        console.log(selectedCurr);
        setCurrentCurrency(selectedCurr);

        if(setIsOpen){
            setIsOpen(false);
        }

        if(setFooterCurrency){
            setFooterCurrency(false);
        }

    }
    
    
    return (
        <div >
            <div id="tabMedSep" />
            <h1 id="selection_title">
                Choose a currency
            </h1>
            <div id="curr_grid">
                {
                    currData && (
                        Object.values(currData).map((currencies) => 
                            <button
                                key={currencies.cur_id}
                                id="currBtn"
                                onClick={() => newCurrencySelected(currencies.cur_symbol)}
                            >
                                {currencies.cur_country}
                                <h3 id="curr_type">{currencies.cur_type}</h3>
                            </button>
                        )
                    )
                }
            </div>
        </div>
     )

};

export default CurrencyModal;

/*

    APP.jsd --> ADD --> const [currentCurrency, setCurrentCurrency] = useState ('$ USD');

    CSS Styling for Currency

    #curr_grid{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 50px;
    }

    #currBtn{
        height: 50px;
        width: 150px;
        border-radius: 10px;
        background: none;
        text-align: left;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
    }

    #currBtn:hover{
        background: lightgrey;
    }

    #curr_type{
        font-size: 10px;
        padding-top: 0;
        padding-bottom: 10px;
        color: grey;
        font-weight: bold;
    }

*/