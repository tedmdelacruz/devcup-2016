import PushNotification from 'react-native-push-notification'

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    // onRegister: function(token) {
    //     console.log( 'TOKEN:', token );
    // },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // ANDROID ONLY: (optional) GCM Sender ID.
    // senderID: "YOUR GCM SENDER ID",

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: false,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    // requestPermissions: true,
})

export default PushNotification
