import React, { useState } from "react";

import Header from "./Header";
import UpperBody from "./UpperBody";
import LowerBody from "./LowerBody";
import ReviewSection from "./ReviewSection";
import LocationSection from "./LocationSection";
import Footer from "./Footer";


import "./nl-components.css"; //cilent/src/nl-components.css





function App() {

  const [saveFav, setSaveFav] = useState(false);
  const [positions, setPositions] = useState([46.189091, -123.834709]);
  const [signedIn, setSignedIn] = useState(false);
  const [lanData, setLanData] = useState([{}]);
  const [currData, setCurrData] = useState([{}]);
  const [currentLan, setCurrentLan] = useState('English (US)');
  const [currentCurrency, setCurrentCurrency] = useState('$ USD');

  return (
    <div>
        <Header
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          lanData={lanData}
          setLanData={setLanData}
          currData={currData}
          setCurrData={setCurrData}
          setCurrentLan={setCurrentLan}
          setCurrentCurrency={setCurrentCurrency}
        />
      {/* Section Break */}
      <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
      {/* Section Break */}
      <UpperBody
        saveFav={saveFav}
        setSaveFav={setSaveFav}
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        positions={positions}
        setPositions={setPositions}
      />
      {/* Section Break */}
      <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
      {/* Section Break */}
      <LowerBody />
      <pre><br></br></pre>
      {/* Section Break */}
      <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
      {/* Section Break */}
      <ReviewSection />
      {/* Section Break */}
      <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
      {/* Section Break */}
      <LocationSection
        positions={positions}
        setPositions={setPositions}
      />
      {/* Section Break */}
      <center><div style={{ backgroundColor: '#dadada', width: 'auto', height: '1px' }}></div></center>
      {/* Section Break */}
      <Footer
        currentLan={currentLan}
        currentCurrency={currentCurrency}
        lanData={lanData}
        currData={currData}
        setCurrentLan={setCurrentLan}
        setCurrentCurrency={setCurrentCurrency}
      />
    </div>
  );
};

export default App;