import { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup, signOut
} from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
// const firebaseConfig = {
// 	apiKey: "AIzaSyAjXvKgCIHB-aZkbqSSGysRfhTLqv2WTcc",
// 	authDomain: "thecoderides-admin.firebaseapp.com",
// 	projectId: "thecoderides-admin",
// 	storageBucket: "thecoderides-admin.firebasestorage.app",
// 	messagingSenderId: "105296362889",
// 	appId: "1:105296362889:web:70004ea5bcac01f8607558",

// 	databaseURL: "https://thecoderides-admin-default-rtdb.firebaseio.com",
// 	measurementId: "G-80E5QYV9RE"
// };

console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("Auth Domain:", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log("Project ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);




const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAjXvKgCIHB-aZkbqSSGysRfhTLqv2WTcc",
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	databaseURL: "https://thecoderides-admin-default-rtdb.firebaseio.com",
	measurementId: "G-80E5QYV9RE"
};

const FireBaseContext = createContext(null)
export const useFireBase = () => useContext(FireBaseContext)
const FireBaseApp = initializeApp(firebaseConfig)

export const FireBaseAppGloble = initializeApp(firebaseConfig)

const FireBaseAuth = getAuth(FireBaseApp)
const dataBase = getDatabase(FireBaseApp)
const googleProvider = new GoogleAuthProvider()
const logOut = signOut(FireBaseAuth)
const fireStore = getFirestore(FireBaseApp)

export const FireBaseProvider = (props) => {
	const signUpwithEmailPassowrd = (email, password) => {
		return createUserWithEmailAndPassword(FireBaseAuth, email, password)
	}
	const addAdminData = (key, data) => set(ref(dataBase, key), data)
	const signUpWithGoogle = () => {
		signInWithPopup(FireBaseAuth, googleProvider)
	}
	const loginWithEmail = (email, password) => {
		signInWithEmailAndPassword(FireBaseAuth, email, password)
	}
	const [isUserLogin, setIsUserLogin] = useState(null)

	const handleNewProject = async (proName, proDesc) => {
		return await addDoc(collection(fireStore, "projects"), {
			proName, proDesc
		})
	}
	useEffect(() => {
		onAuthStateChanged(FireBaseAuth, user => {
			if (user) {
				console.log(user, 'user')
				setIsUserLogin(user)
				console.log(isUserLogin)
			}
			else {
				console.log(user, 'user')
				setIsUserLogin(null)
				console.log(isUserLogin)
			}
		})
	}, [])

	const isLogin = isUserLogin ? true : false
	return (
		<FireBaseContext.Provider value={
			{
				signUpwithEmailPassowrd,
				signUpWithGoogle,
				loginWithEmail,
				addAdminData,
				isLogin,
				logOut,
				handleNewProject,
				isUserLogin
			}
		}>
			{props.children}
		</FireBaseContext.Provider>
	)
}