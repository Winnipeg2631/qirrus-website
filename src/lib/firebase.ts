import {initializeApp, getApp, getApps} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  projectId: 'restaurant-central-x36yb',
  appId: '1:623071291471:web:de1a8343e791031a08e23a',
  storageBucket: 'restaurant-central-x36yb.appspot.com',
  apiKey: 'AIzaSyCYyxB4wHvH_oixkDNchb1wRobo77OmSLU',
  authDomain: 'restaurant-central-x36yb.firebaseapp.com',
  messagingSenderId: '623071291471',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);

export {app, storage};
