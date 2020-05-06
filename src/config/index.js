import Firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC0NDPhtgU7gFAvl3Y6f8zn-HvOivFrwvs",
    authDomain: "reactmovies-1ee6a.firebaseapp.com",
    databaseURL: "https://reactmovies-1ee6a.firebaseio.com",
    projectId: "reactmovies-1ee6a",
    storageBucket: "reactmovies-1ee6a.appspot.com",
    messagingSenderId: "1055602690991",
    appId: "1:1055602690991:web:e421e43f85d6a0b521fd5a"
  };
  // Initialize Firebase
  const fire = Firebase.initializeApp(firebaseConfig);
  export default fire