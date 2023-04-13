import React from 'react';

const Thingstoknow = () => {

    return (
        <div className='things'>
            <div style={{ textAlign: 'left'}} className='thingsheader'>
                <h1 style={{fontSize:24}}>
                <b>Things to know</b>
                </h1>
                <pre></pre>
                <div className='thingsrow'>
                    <div className='thingscolumn'>
                        <div className='houserules'>
                            <b>House rules</b>
                            <pre></pre>
                            <div classname='checkintime'> {/*swap time for DB info on checkin time */}
                                Check-in after 4:00 PM
                            </div>
                            <pre></pre>
                            <div className='checkouttime'> {/*swap time for DB info on checkout time */}
                                Checkout before 2:00 PM
                            </div>
                            <pre></pre>
                            <div className='guestsallowed'> {/*swap time for DB info on number */}
                                2 guests maximum 
                            </div>
                            <pre></pre>
                            <a>
                                <button className='morebutton'>
                                    Show more &gt;
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='thingscolumn'>
                        <div className='safety'>
                        <b>Safety & Property</b>
                            <pre></pre>
                            <div classname='feature1'> {/*swap for first three features saved to db for property*/}
                                Heights without rails or protection
                            </div>
                            <pre></pre>
                            <div className='feature2'>
                                Carbon monoxide alarm
                            </div>
                            <pre></pre>
                            <div className='feature3'>
                                Smoke alarm
                            </div>
                            <pre></pre>
                            <a>
                                <button className='morebutton'>
                                    Show more &gt;
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='thingscolumn'>
                        <div className='cancellation'>
                        <b>Cancellation policy</b>
                            <pre></pre>
                            <div classname='cx1'> {/*seed with db info on cancels*/}
                                This reservation is non-refundable.
                            </div>
                            <pre></pre>
                            <div className='cx2'>
                                Review the Hosts full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.
                            </div>
                            <pre></pre>
                            <a>
                                <button className='morebutton'>
                                    Show more &gt;
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thingstoknow;