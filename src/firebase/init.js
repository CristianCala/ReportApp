import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAq5nnFx2B-T3c6zErlyC6cY5PNiXktY4c",
  authDomain: "reportapp-a7790.firebaseapp.com",
  projectId: "reportapp-a7790",
  storageBucket: "reportapp-a7790.appspot.com",
  messagingSenderId: "442018765635",
  appId: "1:442018765635:web:7dec034299be9b8d87edf6",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default db;
