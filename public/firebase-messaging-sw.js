// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyC6YVaI2PCyBDwdu3EZQF7TCXUcYAdEgVw",
    authDomain: "pwa-react-b3fd2.firebaseapp.com",
    projectId: "pwa-react-b3fd2",
    storageBucket: "pwa-react-b3fd2.appspot.com",
    messagingSenderId: "118385398179",
    appId: "1:118385398179:web:c7d0bd2de0e06be899ca16",
    measurementId: "G-81T1MGR90C"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon:"https://cdn.icon-icons.com/icons2/1283/PNG/512/1497619898-jd24_85173.png"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});