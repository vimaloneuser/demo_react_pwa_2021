import React from 'react';
import logo from './logo.svg';
import './App.css';
/*firebase daniel start*/
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import PwaInstallPopupIOS from 'react-pwa-install-ios';


const firebaseConfig = {
  apiKey: "AIzaSyDKWAvR0nop8qjn-Q_QqeyOB6tL3IDi2aY",
  authDomain: "orthotrac-59eb6.firebaseapp.com",
  projectId: "orthotrac-59eb6",
  storageBucket: "orthotrac-59eb6.appspot.com",
  messagingSenderId: "543924703775",
  appId: "1:543924703775:web:ce3386f4c375d2eb323b2a",
  measurementId: "G-2E8TV9BEHD"
};

let token = "";

const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

getToken(messaging, {
  vapidKey:
    "BNfEjRff7OxGivx16_Oiyc0-xsF5xDWeLDX1s-UNWFX_zZ9npzlzR4zgEKQlmwTYD1na397toRAwfXrhuahmsCA",
})
  .then((currentToken) => {
    if (currentToken) {
      token = currentToken;
      console.log("Firebase Token", currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

/*firebase daniel end*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>React js PWA</h3>
        </p>
        <button onClick={() => navigator.clipboard.writeText(token)} >Copy token</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header><br /><br />
      <div>
        <PwaInstallPopupIOS>
          <div
            delay={0}
            style={{
              padding: '15px 30px',
              backgroundColor: 'blue',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Hey ! I am the PwaInstallPopupIOS component.
            without the 'force=true' props, I will display only on iOS device,
            not in standalone mode.
          </div>
        </PwaInstallPopupIOS>
      </div>
    </div>
  );
}

export default App;
