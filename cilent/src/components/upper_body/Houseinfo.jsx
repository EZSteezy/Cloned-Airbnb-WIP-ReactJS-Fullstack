import React, { useState } from "react";
import LocationModalUB from "./location-modal-upperbody";
import LocationModal from "../location/location-modal"; //location/location-modal.js
import "../map.css";


const Houseinfo = ({ positions }) => {

    const [mapOpen, setMapOpen] = useState(false);

    return (
        <div
            data-plugin-in-point-id="TITLE_DEFAULT"
            data-section-id="TITLE_DEFAULT"
            style={{ paddingTop: 24 }}
        >
            <section style={{}}>
                <div className="_b8stb0" style={{}}>
                    <span className="_1n81at5">
                        <h1
                            tabIndex={-1}
                            className="hghzvl1 i1wofiac dir dir-ltr"
                            elementtiming="LCP-target"
                            style={{}}
                        >
                            Tree House on Lake Travis #15
                        </h1>
                    </span>
                </div>
                <div className="_1qdp1ym" style={{}}>
                    <div className="_dm2bj1">
                        <span className="_1jvg42j">
                            <span className="_12m9c11">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        height: 14,
                                        width: 14,
                                        fill: "currentcolor"
                                    }}
                                >
                                    <path
                                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="_17p6nbba" aria-hidden="true">
                                4.89 ·
                            </span>
                            <span className="_s65ijh7">
                                <button
                                    aria-label="Rated 4.89 out of 5 from 46 reviews."
                                    type="button"
                                    className="l1j9v1wn bbkw4bl c1rxa9od dir dir-ltr"
                                    style={{}}
                                >
                                    46 reviews
                                </button>
                            </span>
                        </span>
                        <span className="_5oadh0" aria-hidden="true">
                            ·
                        </span>
                        <span className="_1jvg42j">
                            <span className="_12m9c11">
                                <span className="_8tbpu3" aria-hidden="true">
                                    󰀃
                                </span>
                            </span>
                            <span aria-hidden="false" className="_1mhorg9">
                                Superhost
                            </span>
                        </span>
                        <span className="_5oadh0" aria-hidden="true">
                            ·
                        </span>
                        <span className="_1jvg42j">
                            <div className="btnWrapper">
                                <button
                                    type="button"
                                    className="l1j9v1wn bbkw4bl c1rxa9od dir dir-ltr"
                                    onClick={() => setMapOpen(true)}
                                >
                                    <span className="_9xiloll" aria-hidden="false">
                                        Lakeway, Texas, United States
                                    </span>
                                </button>
                                <LocationModalUB
                                    mapOpen={mapOpen}
                                    onClose={() => setMapOpen(false)}
                                >
                                   <LocationModal 
                                        positions={positions}
                                    />
                                </LocationModalUB>
                            </div>
                        </span>
                    </div>
                    <div className="_88xxct">
                        <div className="_y4w03w">
                            
                        </div>
                    </div>
                    

                </div>
                
            </section>
        </div>


    )
}

export default Houseinfo;


