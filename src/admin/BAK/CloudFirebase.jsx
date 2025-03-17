import React from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { FireBaseApp } from '../../../context/Firebase'

const fireStore = getFirestore(FireBaseApp)
console.log(fireStore);

function CloudFirebase() {

	const addUserCity = async ()=>{
		const userCity = await addDoc(
			collection(fireStore, 'cities'),
			{
				name:'Delhi',
				pinCode:'110011'
			}
		)
		console.log('userCity', userCity)
	}

	return (
		<div className='container'>
			<h1>CloudFirebase</h1>
			<button className='btn btn-primary' onClick={addUserCity}>Add User City</button>
		</div>
	)
}

export default CloudFirebase