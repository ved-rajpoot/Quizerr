// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
// const firebaseConfig = {

//     apiKey: "AIzaSyAA5VYbb4YxlFVA-L_4GRRlU27bFh8oW9w",
//     authDomain: "quizerr-6c7d7.firebaseapp.com",
//     projectId: "quizerr-6c7d7",
//     storageBucket: "quizerr-6c7d7.appspot.com",
//     messagingSenderId: "166362422068",  
//     appId: "1:166362422068:web:252872d284176b4fd82361"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {

    apiKey: "AIzaSyAA5VYbb4YxlFVA-L_4GRRlU27bFh8oW9w",
    authDomain: "quizerr-6c7d7.firebaseapp.com",
    projectId: "quizerr-6c7d7",
    storageBucket: "quizerr-6c7d7.appspot.com",
    messagingSenderId: "166362422068",  
    appId: "1:166362422068:web:252872d284176b4fd82361"
};  
    
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.auth()
// firebase.analytics();

export default firebaseApp;