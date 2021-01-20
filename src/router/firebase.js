  
  
 

 

   
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
export const login=app.auth()
export const areaCollection = db.collection('Area');
export const  editorialCollection = db.collection('Editorial');
export const categoriaCollection=db.collection('Categoria')


export const personaCollection=db.collection('Persona')
export const libroCollection=db.collection('Libro')
export const  bd=app.storage()

// Initialize Firebase
//let app=Firebase.initializeApp(firebaseConfig);

//let db=app.database()
 
