import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBAfqcNEhqpSRD78DzJQ3Dy7lhTqRv9XEI",
  authDomain: "open-fire-gallery.firebaseapp.com",
  projectId: "open-fire-gallery",
  storageBucket: "open-fire-gallery.appspot.com",
  messagingSenderId: "743489129130",
  appId: "1:743489129130:web:c2f27e9b6a9523c6e29ed3",
};

const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = fire.storage();
const projectFirestore = fire.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp, fire };
