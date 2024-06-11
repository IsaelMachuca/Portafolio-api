// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDFYkdi1zakK0ZoPDblqy-1JQZGTWIq1gA",
  authDomain: "portafolio-web-db.firebaseapp.com",
  projectId: "portafolio-web-db",
  storageBucket: "portafolio-web-db.appspot.com",
  messagingSenderId: "288036755550",
  appId: "1:288036755550:web:8b524b4d2901aeed2f3ccf"
};

const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);