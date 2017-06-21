import firebase from 'firebase';
import config from '../secret/firebase';

try {
    var fbauth = {
        apiKey: process.env.API_KEY || config.apiKey,
        authDomain: process.env.AUTH_DOMAIN || config.authDomain,
        databaseURL: process.env.DATABASE_URL || config.databaseURL,
        storageBucket: process.env.STORAGE_BUCKET || ''
    };
    firebase.initializeApp(fbauth);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
