import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAHyO_xSx_EipP_9lEwC6vKbrGeY7L8K_o",
  authDomain: "fir-71928.firebaseapp.com",
  projectId: "fir-71928",
  storageBucket: "fir-71928.appspot.com",
  messagingSenderId: "640476582722",
  appId: "1:640476582722:web:241000ae4dfce59e286edb",
  measurementId: "G-90X7YE7M57",
};

export default firebase.initializeApp(firebaseConfig)