import React from "react";

import "./searchbar.css";

const SearchStay = ({ children, searchDropdown }) => {
    
    if(!searchDropdown) return null;
    return(
        <div id="searchModal" >
            {children}
        </div>
    )

}

export default SearchStay;