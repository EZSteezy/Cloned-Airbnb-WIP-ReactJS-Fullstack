import React from 'react';

const Hostedby = () => {

    return (
        <center>
            <div className='hostcontainer'>
                <div className='hostedby' style={{ display: 'flex', alignItems: 'center', textAlign:'center'}}>
                    <div style={{ textAlign: 'left' }} className='hostedbyheader'>
                        <h1>
                            <div>
                                <img className='hostpfp' src='https://i.ibb.co/2vWPZ72/Host.png' style={{ float: 'none' }}></img>
                            </div>
                        </h1>
                    </div>
                    <div className='hostedbytext' style={{ marginLeft: '10px', fontSize: 24, whiteSpace: 'nowrap' }}>
                        <b>Hosted by Elsy</b> {/*replace with seeded name from DB for property host*/}
                        <div />
                        <div style={{ fontWeight: 'normal', fontSize: 12, textAlign: 'left' }}>
                            <pre></pre>
                            Joined in November 2020 {/*seed with host date joined*/}
                        </div>
                    </div>
                </div>
                <div style={{ width: '1120px', textAlign: 'left' }}>
                    ★ 2,212 Reviews   ☑ Identity confirmed {/*seed with icons and attributes*/}
                    <pre></pre>
                    <div style={{ fontWeight: 'bold', fontSize: 14 }}>
                        <pre></pre>
                        Co-hosts <br></br> {/*seed with cohost image and name*/}
                        <pre></pre>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='https://i.ibb.co/R7TXW5H/cohost.jpg' style={{ height: '40px', width: '40px', display: 'inline', }} />
                            <span style={{ display: 'inline', marginLeft: '10px' }}>Sam</span>
                        </div>
                    </div>
                    <pre></pre>
                    <div style={{ textAlign: 'left', fontSize: '14px' }}>
                        Policy number: GVR-13234 {/*seed with host policy #*/}
                        <pre></pre>
                        Respone rate: 99% {/*seed with host reply rate*/}
                        <pre></pre>
                        Response time: within an hour {/*seed with host reply rate*/}
                        <pre></pre>
                        <button style={{height:'35px', width:'125px'}}>Contact Host</button> 
                    </div>

                    <br></br>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                            <img src='https://i.ibb.co/3pQc5gT/protect.jpg' style={{ height: '20px', width: '19px', display: 'inline', }} />
                            <span style={{ display: 'inline', marginLeft: '10px', fontSize:12}}>
                                To protect your payment, never transfer<br></br>
                                money or communicate outside of the<br></br>
                                Airbnb website or app.
                            </span>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Hostedby;

