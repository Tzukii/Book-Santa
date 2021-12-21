import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyAOAFJ599ERBNli-MjTozQ1SAIA05gS8cA',
  authDomain: 'book-santa-project-5608d.firebaseapp.com',
  projectId: 'book-santa-project-5608d',
  storageBucket: 'book-santa-project-5608d.appspot.com',
  messagingSenderId: '913323156259',
  appId: '1:913323156259:web:607346ef19eaffa50ca296',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
