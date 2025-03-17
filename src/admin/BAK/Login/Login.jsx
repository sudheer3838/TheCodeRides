import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../../firebase/firebase'
import React, { useState } from 'react'

const auth = getAuth(app)

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const signInUser = ()=>{
		signInWithEmailAndPassword(auth, email, password)
		.then(value => console.log('Login Success!', value))
		.catch(err => console.log("error", err))
	}

	const signUpUser = () => {
		createUserWithEmailAndPassword(
			auth,
			'sudheer@kiwitech.com',
			'sudheer123')
			.then(value => console.log('value', value))
	}
	return (
		<>
			<div>Login</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput4" className="form-label">Email address</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleFormControlInput4" placeholder="*******" />
			</div>
			<button type='submit' className='btn btn-primary' onClick={signInUser}>Login</button>
		</>
	)
}

export default Login