// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHxv0kHDqoARYRawJOrrgXuLJ9_Ky80vk",
  authDomain: "shop-app-c5952.firebaseapp.com",
  projectId: "shop-app-c5952",
  storageBucket: "shop-app-c5952.appspot.com",
  messagingSenderId: "359650685744",
  appId: "1:359650685744:web:4aea5c408287ab25044ef5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
