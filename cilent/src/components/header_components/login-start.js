import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./login.css";
import "../nl-components.css"
import LogInModalTwo from "./login-modal-two";
import SignupScreen from "./login-signup";

const LogInStart = ({ setSignedIn }) => {
  
    const [signUpWin, setSignUpWin] = useState(false);
    
  return ReactDOM.createPortal(
    <div id="logInWin">
        <div className="btnWrapper" id="login_signup" >
            <button
                id="signBtn"
                onClick={() => setSignUpWin(true)}
            >
                Sign up
            </button>
            <LogInModalTwo
                open={signUpWin}
                onClose={() => setSignUpWin(false)}
            >
                <SignupScreen 
                    setSignedIn={setSignedIn}
                    setSignUpWin={setSignUpWin}
                />
            </LogInModalTwo>
        </div>
        <div className="btnWrapper" id="login_signup" >
            <button
                id="signBtn"
                onClick={() => setSignUpWin(true)}
            >
                Log in
            </button>
            <LogInModalTwo
                open={signUpWin}
                onClose={() => setSignUpWin(false)}
            >
                <SignupScreen 
                    setSignedIn={setSignedIn}
                    setSignUpWin={setSignUpWin}
                />
            </LogInModalTwo>
        </div>
        <button id="disableLogin">Crackbnb your home</button>
        <button id="disableLogin">Help</button>
    </div>,
    document.getElementById('portal')
  )

}

export default LogInStart;