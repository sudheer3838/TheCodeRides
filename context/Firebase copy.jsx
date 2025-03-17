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
const firebaseConfig = {
	apiKey: "AIzaSyAjXvKgCIHB-aZkbqSSGysRfhTLqv2WTcc",
	authDomain: "thecoderides-admin.firebaseapp.com",
	projectId: "thecoderides-admin",
	storageBucket: "thecoderides-admin.firebasestorage.app",
	messagingSenderId: "105296362889",
	appId: "1:105296362889:web:70004ea5bcac01f8607558",
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
	const navigate = useNavigate()

	useEffect(() => {
		if (isLogin) {
			navigate('/dashboard', {
				state: { 
					uid: isUserLogin.uid, 
					email: isUserLogin.email, 
					displayName: isUserLogin.displayName
			} 				
			});
		}
	}, [isLogin, navigate, isUserLogin])
	return (
		<FireBaseContext.Provider value={
			{
				signUpwithEmailPassowrd,
				// signUpWithGoogle,
				// loginWithEmail,
				// addAdminData,
				// isLogin,
				// logOut,
				// isUserLogin
			}
		}>
			{props.children}
		</FireBaseContext.Provider>
	)
}