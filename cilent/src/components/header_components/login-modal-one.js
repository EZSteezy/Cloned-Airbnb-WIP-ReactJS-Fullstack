import React from "react";

import "./login.css";

const LogInModalOne = ({ children, open, onClose }) => {
    
    if(!open) return null;
    return(
        <div id="login_modal" >
            {children}
        </div>
    )

}

export default LogInModalOne;