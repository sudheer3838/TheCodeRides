import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../../firebase/firebase'
const auth = getAuth(app)


function SignUp() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const createUser = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(value => console.log('Added')).catch((e => console.log('ee', e)))
	}
	return (
		<>
			<div className='signup-page'>SignUp</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleFormControlInput2" placeholder="*******" />
			</div>
			<button className='btn btn-primary' onClick={createUser}>Sign up</button>
		</>
	)
}

export default SignUp