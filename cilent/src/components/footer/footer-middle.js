import React from "react";

import "../footer-lower.css";
import { stay_types, support_info, community, hosting, fantasybnb } from "../local_database/database";


 
const FooterMiddle = () => {
   
   

    return (
        <div id="footer_main">
            <h1 id="explore_text" > 
                Explore other options in and around North Bend 
            </h1>
            <h3 id='stay_text'>
                Other types of stays on Fantasybnb
            </h3>
            <div id='option_holder'>
                {
                    stay_types.map((stay, index) => 
                        <button
                            key={index}
                            id="stayBtn"
                        >
                            {stay}
                        </button>
                    )
                }
            </div>
            <div id="seperation_line">
                <button id="seperationBtn">Fantasybnb</button>
                <h1 id="seperation_txt"> &gt; </h1>
                <button id="seperationBtn">United States</button>
                <h1 id="seperation_txt"> &gt; </h1>
                <button id="seperationBtn">
                    West Coast of the United States
                </button>
            </div>
            <div id="info_holder">
                <div id="info_div1">Support
                    {
                        support_info.map((supports, index) => 
                            <button
                                key={index}
                                id="supportBtn"
                            >
                                {supports}
                            </button>
                        )
                    }
                </div>
                
                <div id="info_div2">Community
                    {
                        community.map((communities, index) => 
                            <button
                                key={index}
                                id="supportBtn"
                            >
                                {communities}
                            </button>
                        )
                    }
                </div>
                <div id="info_div2">Hosting
                    {
                        hosting.map((hosts, index) => 
                            <button
                                key={index}
                                id="supportBtn"
                            >
                                {hosts}
                            </button>
                        )
                    }
                </div>
                <div id="info_div2">Fantasybnb
                    {
                        fantasybnb.map((fantasybnb, index) => 
                            <button
                                key={index}
                                id="supportBtn"
                            >
                                {fantasybnb}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default FooterMiddle;