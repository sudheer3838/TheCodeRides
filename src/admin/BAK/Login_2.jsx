import React, { useState } from 'react'
import { useFireBase } from '../../../../context/Firebase';


function Login() {
	const fireBase = useFireBase()
	// console.log(fireBase);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	return (
		<div className='onboarding-page'>
			<h3>Login</h3>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput4" className="form-label">Email address</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleFormControlInput4" placeholder="*******" />
			</div>
			<div className="cta">
				<button type='submit' className='btn btn-primary'
					onClick={() => {
						fireBase.signUpwithEmailPassowrd(email, password);
						fireBase.addAdminData(
							"users/" + "email", { email, password }
						)
					}}>
					Login
				</button>
			</div>
			<div className="cta-loginWithGoogle">
				<button className='btn btn-primary' onClick={fireBase.signUpWithGoogle}>
					Login with Google
				</button>
			</div>

		</div>
	)
}

export default Login