// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDKWAvR0nop8qjn-Q_QqeyOB6tL3IDi2aY",
    authDomain: "orthotrac-59eb6.firebaseapp.com",
    projectId: "orthotrac-59eb6",
    storageBucket: "orthotrac-59eb6.appspot.com",
    messagingSenderId: "543924703775",
    appId: "1:543924703775:web:ce3386f4c375d2eb323b2a",
    measurementId: "G-2E8TV9BEHD"
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