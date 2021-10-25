import React from 'react';
import logo from './logo.svg';
import './App.css';
/*firebase daniel start*/
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import PwaInstallPopupIOS from 'react-pwa-install-ios';


const firebaseConfig = {
  apiKey: "AIzaSyC6YVaI2PCyBDwdu3EZQF7TCXUcYAdEgVw",
  authDomain: "pwa-react-b3fd2.firebaseapp.com",
  projectId: "pwa-react-b3fd2",
  storageBucket: "pwa-react-b3fd2.appspot.com",
  messagingSenderId: "118385398179",
  appId: "1:118385398179:web:c7d0bd2de0e06be899ca16",
  measurementId: "G-81T1MGR90C"
};

let token = "";

const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

getToken(messaging, {
  vapidKey:
    "BItYX_qwsjUeDgYUgj1NNbFQtZGU7PqpJhrISX8rHvuhv2Hhksp2w9UVkS-wD0JTy8uCXUcZAqi4fYxwhiayXn8",
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
