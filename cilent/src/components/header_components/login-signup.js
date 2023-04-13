import React, {useEffect} from "react";

import "./login.css";
import { regions } from '../local_database/database';

const SignupScreen = ({ setSignedIn, setSignUpWin, setSaveModal }) => {

    let handleClick = () => {
        setSignedIn(true);

        if(setSignUpWin){
            setSignUpWin(false);
        }

        if(setSaveModal){
            setSaveModal(false);
        }

    }

    const facebook = 'https://cdn.iconscout.com/icon/free/png-256/facebook-108-432507.png?f=webp&w=256';

    const google = 'https://cdn-icons-png.flaticon.com/512/2965/2965278.png';
    
    const apple = 'https://cdn-icons-png.flaticon.com/512/15/15476.png';

    const email = 'https://static.thenounproject.com/png/1003621-200.png';

    return (
        <div id="signup_title">
            <h1 id='signup_login'> Log in or sign up </h1>
            <div id="signup_lower">
                <h2 id="signup_welcome">Welcome to Crackbnb</h2>
                <div id='sign_box'>
                    <h1 id="region_text">country/region..</h1>
                    <select id="signup_region">
                        {
                            regions.map((region, index) =>
                                <option
                                    key={index}
                                    value={region}
                                >
                                    
                                    {region}
                                </option>
                            )
                        }
                    </select>
                </div>
                <input 
                    type="text" 
                    id="signup_phone" 
                    placeholder="Phone number" 
                />
                <div id="final_step">
                <h1 id="signup_final">
                    We'll call or text you to confirm your number. Standard messsage and data rates apply.
                    
                </h1>
                <button id="signup_privacy" > Privacy Policy </button>
                    </div>               
                <button 
                    onClick={handleClick}
                    id="signup_continue"
                > 
                    Continue 
                </button>
                <p id="sign_or">
                -------------------------------------------------------------or-------------------------------------------------------------
                </p>
                <button id="signup_siteBtn" >
                    <img 
                        id="signup_face" 
                        src={facebook}
                        alt=''
                    />
                    Continue with Facebook
                </button>
                <button id="signup_siteBtn" >
                    <img 
                        id="signup_face" 
                        src={google}
                        alt=''
                    />
                    Continue with Google
                </button>
                <button id="signup_siteBtn" >
                    <img 
                        id="signup_apple" 
                        src={apple}
                        alt=''
                    />
                    Continue with Apple
                </button>
                <button id="signup_siteBtn" >
                    <img 
                        id="signup_apple" 
                        src={email}
                        alt=''
                    />
                    Continue with email
                </button>
            </div>
        </div>
    )


}

export default SignupScreen;