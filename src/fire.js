import firebase from 'firebase/compat/app'  
import 'firebase/compat/app'  
import 'firebase/compat/auth'  
  
  
const firebaseConfig = {
    apiKey: "AIzaSyA_lEVy7Cq2U61T_Ir50In8kxYYe1OFlpo",
    authDomain: "online-school-ae761.firebaseapp.com",
    projectId: "online-school-ae761",
    storageBucket: "online-school-ae761.appspot.com",
    messagingSenderId: "529888702922",
    appId: "1:529888702922:web:e04da9a8a237fcb7d09f33"
  };

  
  
const fire = firebase.initializeApp(firebaseConfig)  
  
  
export default fire;