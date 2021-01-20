  
  
 

 

   
import { initializeApp } from 'firebase';
const app = initializeApp({
  apiKey: "AIzaSyDxlMhIlkpsUeaLPDQ9WpFFmkpEBRM1MhA",
  authDomain: "iesantateresa-320ab.firebaseapp.com",
    projectId: "iesantateresa-320ab",
   storageBucket: "iesantateresa-320ab.appspot.com",
   messagingSenderId: "1080773335374",
  appId: "1:1080773335374:web:d85c261703702f5ceaa61f",
   measurementId: "G-3KYY79EKNH"
});

export const db = app.firestore();
export const todosCollection = db.collection('Area');
 
// Initialize Firebase
//let app=Firebase.initializeApp(firebaseConfig);

//let db=app.database()
 
