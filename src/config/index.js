import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
	authDomain: 'reactmovies-1ee6a.firebaseapp.com',
	databaseURL: 'https://reactmovies-1ee6a.firebaseio.com',
	projectId: 'reactmovies-1ee6a',
	storageBucket: 'reactmovies-1ee6a.appspot.com',
	messagingSenderId: '1055602690991',
	appId: '1:1055602690991:web:e421e43f85d6a0b521fd5a',
};
// Initialize Firebase
export const fire = Firebase.initializeApp(firebaseConfig);

export const db = fire.firestore();
