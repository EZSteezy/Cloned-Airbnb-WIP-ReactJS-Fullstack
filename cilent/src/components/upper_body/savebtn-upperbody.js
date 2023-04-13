import React, { useState } from "react";
import "../nl-components.css";

import SignupScreen from "../header_components/login-signup";
import SaveModal from "./save-modal";

const SaveBtn = ({ saveFav, setSaveFav, signedIn, setSignedIn }) => {

    const [saveModal, setSaveModal] = useState(false);

    const favSaved = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png';

    const notFav = 'https://cdn-icons-png.flaticon.com/512/3916/3916579.png'

    function handleClick(){
        //console.log('Hi World');
        !signedIn ? notSignedIn() : saveUpdate();
    }

    function notSignedIn(){
        //console.log("not SignedIn");
        setSaveModal(true);
    }

    function saveUpdate () {
        saveFav ? setSaveFav(false) : setSaveFav (true);
        // console.log('I was clicked');
    }

    return (

        <div id="outer_shell">               
            <button
                id="saveBtn"
                onClick={() => handleClick()}
            >
                <img
                    src={saveFav ? favSaved : notFav}
                    id="heartimg"
                    alt= ''
                />
                Save
            </button>
            <div className="btnWrapper">
                <SaveModal
                    open={saveModal}
                    onClose={() => setSaveModal(false)}
                >
                    <SignupScreen 
                        setSignedIn={setSignedIn}
                        setSaveModal={setSaveModal}
                    />
                    {/* Hi World */}
                </SaveModal>
            </div>
        </div>
    )

};

export default SaveBtn;