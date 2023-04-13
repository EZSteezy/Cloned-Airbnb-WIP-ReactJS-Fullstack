import React, { useState } from "react";

import "./searchbar.css";
import SearchStay from "./search-stay-modal";

const SearchBar = () => {
    
    const [searchDropdown, setSearchDropdown] = useState(false);

    const handleClick = () => {
        
    }
    
    return(
        <div className="search_wrapper" >
            <button 
                style={{
                    fontWeight:'bold'
                }}
                id='search_input'
                onClick={handleClick}
            >
                    Start your search
                <img 
                    id='search_icon'
                    src='https://images.freeimages.com/fic/images/icons/1262/amora/256/find.png'
                    alt=""
                />
                <SearchStay
                    searchDropdown={searchDropdown}
                >
                    This is a Map
                    <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' alt='' />
                </SearchStay>
            </button>
        </div>
    )
    

}

export default SearchBar;