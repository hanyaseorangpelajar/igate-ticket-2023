import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVIF7x8PbAGaxmt5XCAnSuQHOcSF4oZK8",
  authDomain: "igate2023.firebaseapp.com",
  projectId: "igate2023",
  storageBucket: "igate2023.appspot.com",
  messagingSenderId: "288040869635",
  appId: "1:288040869635:web:34059626330e65ea2fd336",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db };
export { storage };
