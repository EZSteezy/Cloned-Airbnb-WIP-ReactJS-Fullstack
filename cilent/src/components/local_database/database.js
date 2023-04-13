const stay_types=[
    'West Coast of the United States vacation rentals',
    'West Coast of the United States monthly stays',
    'Cabin rentals',
    'Treehouse rentals',
    'National parks',
    'Countryside',
    'Luxury rentals in United States'
];

const support_info=[
    'Help Center',
    'AirCover',
    'Supporting people with disabilities',
    'Cancellation options',
    'Our COVID-19 Response',
    'Report a neighborhood concern'
];

const community=[
    'Fantasybnb.org: disaster relief housing',
    'Combating discrimination'
];

const hosting=[
    'Fantasybnb your home',
    'AirCover for Hosts',
    'Explore hosting resources',
    'Visit our community forum',
    'How to host responsibly',
    'Fantasybnb-friendly apartments'
];

const fantasybnb=[
    'Newsroom',
    'Learn about new features',
    'Letter from our founders',
    'Careers',
    'Investors',
    'Gift cards'
];

const regions=[
    '                 ', 'Afghanistan (+93)', 'Åland Islands (+358)', 'Albania (+355)', 'Algeria (+213)', 'American Samoa (+1)','Andorra (+376)', 'Angola (+244)', 'Anguilla (+1)', 'Antigua &amp; Barbuda (+1)', 'Argentina (+54)', 'Armenia (+374)', 'Aruba (+297)','Australia (+61)', 'Austria (+43)','Azerbaijan (+994)', 'Bahamas (+1)', 'Bahrain (+973)', 'Bangladesh (+880)', 'Barbados (+1)', 'Belarus (+375)', 'Belgium (+32)', 'Belize (+501)', 'Benin (+229)', 'Bermuda (+1)', 'Bhutan (+975)', 'Bolivia (+591)', 'Bonaire, Sint Eustatius and Saba (+599)', 'Bosnia &amp; Herzegovina (+387)', 'Botswana (+267)', 'Brazil (+55)', 'British Indian Ocean Territory (+246)', 'British Virgin Islands (+1)', 'Brunei (+673)', 'Bulgaria (+359)', 'Burkina Faso (+226)', 'Burundi (+257)', 'Cambodia (+855)', 'Cameroon (+237)', 'Canada (+1)', 'Cape Verde (+238)', 'Cayman Islands (+1)', 'Central African Republic (+236)', 'Chad (+235)', 'Chile (+56)', 'China (+86)', 'Christmas Island (+61)', 'Cocos (Keeling) Islands (+61)', 'Colombia (+57)', 'Comoros (+269)', 'Congo (+242)', 'Cook Islands (+682)', 'Costa Rica (+506)', 'Côte d\'Ivoire (+225)', 'Croatia (+385)', 'Cuba (+53)', 'Curaçao (+599)', 'Cyprus (+357)', 'Czechia (+420)', 'United States (+1)'

];

export { stay_types, support_info, community, hosting, fantasybnb, regions };

/*
    App Front-End from nl desktop

    import "../nl-components.css"; //cilent/src/nl-components.css
    
    import GlobeBtn from './components/nl-h4-globebtn';
import SaveBtn from './components/nl-ub5-savebtn';
import Location from './components/nl-l2-location';
import Footer from './components/nl-footer';
import LogInButton from './components/nl-h5-login';
import SearchBar from './components/nl-h2-searchbar';
import AmenitiesHome from './components/nl-lblml2-amenities.js';

function App() {

  const [saveFav, setSaveFav] = useState(false);
  const [lanData, setLanData] = useState([{}]);
  const [currData, setCurrData] = useState([{}]);
  const [currentLan, setCurrentLan] = useState('English (US)');
  const [currentCurrency, setCurrentCurrency] = useState ('$ USD');
  const [positions, setPositions] = useState([46.189091, -123.834709]);
  const [signedIn, setSignedIn] = useState(false);
  

  return(
    <div>
      <div id="line_up">
        <GlobeBtn 
          lanData={lanData}
          setLanData={setLanData}
          currData={currData}
          setCurrData={setCurrData}
          setCurrentLan={setCurrentLan}
          setCurrentCurrency={setCurrentCurrency}
        />
        <SaveBtn 
          setSaveFav={setSaveFav}
          saveFav={saveFav}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
        />
        <LogInButton
          signedIn={signedIn}
          setSignedIn={setSignedIn}
        />
      </div>
      <SearchBar />
      <AmenitiesHome />
      <Location 
        positions={positions} 
        setPositions={setPositions}
      />
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
  
}

export default App;
    

       

*/