// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuGM8NxjcBVDljxJA5yOaX4iPcfwPmVIo',
  authDomain: 'reactbackendsapp.firebaseapp.com',
  projectId: 'reactbackendsapp',
  storageBucket: 'reactbackendsapp.appspot.com',
  messagingSenderId: '1476464023',
  appId: '1:1476464023:web:57819c13732afc04e148d2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
