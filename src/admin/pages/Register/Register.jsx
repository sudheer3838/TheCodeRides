import React, { useEffect, useState } from 'react'
import { useFireBase } from '../../../../services/context/Firebase'
import { useNavigate } from 'react-router-dom'

function Register(props) {
	const fireBase = useFireBase()
	const navigate = useNavigate()


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await fireBase.signUpwithEmailPassowrd(email, password)
		// console.log("Login Success,", result.operationType, );		
	}
	useEffect(() => {
		if (fireBase.isLogin) {
			// navigate('/dashboard')
		}
	}, [fireBase, navigate])
	return (
		<div className='onboarding-page'>
			<h3>Sign up for The Code Rider</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput5" className="form-label">Email address</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput5" placeholder="you@example.com" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput6" className="form-label">Password</label>
					<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleFormControlInput6" placeholder="Enter 8 characrter or more" />
				</div>
				<div className="cta">
					<button type='submit' className="btn btn-primary">Create account</button>
				</div>
			</form>
			<div className="need-account already-account text-center">
				<p><span>Already have an account?</span> <button className='btn' onClick={() => props.event(true)}>Sign In</button></p>
			</div>
		</div>
	)

}

export default Register
