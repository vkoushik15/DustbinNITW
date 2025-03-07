import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCLZN-TqXO7vZmT1QHxOysdob3yeL5lnqE",
  authDomain: "smart-dustbin-management-sys.firebaseapp.com",
  projectId: "smart-dustbin-management-sys",
  storageBucket: "smart-dustbin-management-sys.appspot.com",
  messagingSenderId: "378670432821",
  appId: "1:378670432821:web:4afd99cc777e0db052e77c",
  measurementId: "G-KQ8C8B5MJG"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database ,ref,set,push};
