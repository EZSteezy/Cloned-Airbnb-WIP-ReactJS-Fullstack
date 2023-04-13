import React from 'react';


const Mainpics = () => {

    return (
        <div className="mainpicscontainer" style={{marginBottom: "50px"}}>
            <div className="large-image">
                {/* Large */}
                <img src="https://i.ibb.co/0m2pc9W/houselarge.png" alt="" width="1120" height="560" style={{cursor:'pointer'}}/>
            </div>
            <div className="column">
                <div className="row">
                    {/* Column Image 1 */}
                    <img src="https://i.ibb.co/H4LhVkr/column1.png" alt="" width="272" height="280" style={{cursor:'pointer'}}/>
                </div>
                <div className="row">
                    {/* Column Image 2 */}
                    <img src="https://i.ibb.co/0m2pc9W/houselarge.png" alt="" width="272" height="280" style={{cursor:'pointer'}}/>
                </div>
            </div>
            <div className="column">
                <div className="row">
                    {/* Column Image 3 */}
                    <img src="https://i.ibb.co/7JGPhBR/column3.webp" alt="" width="272" height="280" style={{cursor:'pointer'}}/>
                </div>
                <div className="row" style={{ position: 'relative' }}>
                    {/* Column Image 4 */}
                    <img src="https://i.ibb.co/6DWh32T/column4.webp" alt="" width="272" height="280" style={{cursor:'pointer'}}/>

                    <button style={{ position: 'absolute', bottom: 25, right: 25, display: 'flex', alignItems: 'center', height: '30px', width: '150px', cursor:'pointer' }}>
                        <img src='../images/picmenudots.png' alt='' style={{ display: 'inline', height: '15px', marginRight: '5px', width: '15px' }} />
                        Show all photos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mainpics