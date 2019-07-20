import firebase from "firebase";
export function initializePush() {
    const messaging = firebase.messaging();

    messaging
        .requestPermission()
        .then(() => {
            console.log("have permission");
            return messaging.getToken();
        })
        .then(token => {
            console.log("FCM Token : ", token);
        })
        .catch(error => {
            if (error === "messaging/permission-blocked") {
                console.log("Please Ublock Notification request manualy");
            } else {
                console.log("error occurred");
            }
        })

    messaging.onMessage(payload => {
        try {
            const noteOptions = {
                body: payload.notification.body,
                icon: payload.notification.icon, //this is my image in my public folder
            };

            new Notification(payload.notification.title, noteOptions); //This can be used to generate a local notification, without an incoming message. noteOptions has to be an object
        } catch (err) {
            console.log('Caught error: ', err);
        }
    });
}

