import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

import { styles } from './app_styles';
import { Search } from './components/Search';
import useMap from './hooks/useMap';
import useFetch from './hooks/useFetch';
import { ReactComponent as BackgroundIcon } from './assets/icons/background.svg';



function App() {
  const [ipAddress, setIpAddress] = useState("")
  const [domain, setDomain] = useState("")
  const { result, error } = useFetch(`https://geo.ipify.org/api/v2/country?apiKey=at_hpnAWlUQYQwhdKJHXYH9tzxN6kfh9${ipAddress === "" ? "" : `&ipAddress=${ipAddress}`}${domain === "" ? "" : `&domain=${domain}`}`)
  useMap();

  return (
    <div className={styles.app}>
      <div className={styles.appSearchContainer}>
        <Search />
        <div className={styles.appPositionedContainer}>
          <div className={styles.appPositioned}>
            <ul className={styles.appPostionedTextContainer}>
              <li className={styles.appPositionedText}>
                <h5 className={styles.appPositionedTextHeading}>IP Address</h5>
                <p className={styles.appPositionedTextContent}>{result?.ip}</p>
              </li>
              <li className={styles.appPositionedText}>
                <h5 className={styles.appPositionedTextHeading}>Location</h5>
                <p className={styles.appPositionedTextContent}>{result?.location?.region},{result?.location?.country}</p>
              </li>
              <li className={styles.appPositionedText}>
                <h5 className={styles.appPositionedTextHeading}>Timezone</h5>
                <p className={styles.appPositionedTextContent}>UTC {result?.location?.timezone}</p>
              </li>
              <li className={styles.appPositionedText}>
                <h5 className={styles.appPositionedTextHeading}>ISP</h5>
                <p className={styles.appPositionedTextContent}>{result?.isp}</p>
              </li>
            </ul>

          </div>
        </div>

        <div className={styles.backgroundContainer}>
          <BackgroundIcon />
        </div>
      </div>

      <div style={{ width: "100%", height: "100%", zIndex: "10" }} id="map">
      </div>

    </div>
  );
}

export default App;
