import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReCaptcha from '../../../utlities/ReCaptcha';

function Form() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		if (submitted) {
			const timer = setTimeout(() => setSubmitted(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [submitted]);


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(
			{ ...formData, [name]: value }
		);
	}
	const validate = () => {
		const errors = {};
		if (!formData.name.trim()) {
			errors.name = 'Full name is required.';
		}
		if (!formData.email.trim()) {
			errors.email = 'Email is required.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errors.email = 'Invalid email address.';
		}
		if (!formData.message.trim()) {
			errors.message = 'Message is required.';
		} else if (formData.message.length <= 50) {
			errors.message = 'Message length should not be less than 50 characters.';
		}
		// console.log(errors);
		return errors;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		// console.log(Object.keys(validationErrors).length === 0);    
		if (Object.keys(validationErrors).length === 0) {
			setSubmitted(true);
			axios.post('https://67a4623231d0d3a6b78625a6.mockapi.io/clientList', {
				name: formData.name,
				email: formData.email,
				clientMessage: formData.message,
			});
			setFormData({ name: '', email: '', message: '' });
			// console.log(errors);
			setErrors({});
		} else {
			// console.log(errors.name, validationErrors);
			setErrors(validationErrors);
		}
		// console.log(formData.name, formData.email, formData.message);
	}


	return (
		<form onSubmit={handleSubmit} aria-label="Contact form">
			<div className='form-group'>
				<label className='form-label' htmlFor="name">Full Name *</label>
				<input
					className='form-control'
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					aria-required="true"
					aria-invalid={!!errors.name}
					placeholder='Enter your full name'
				/>
				{/*  */}
				{errors.name && (
					<span className='errorMsg' id="fullNameError" role="alert" style={{ color: 'red' }}>
						{errors.name}
					</span>
				)}
			</div>

			<div className='form-group'>
				<label className='form-label' htmlFor="email">Email *</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					className='form-control'
					onChange={handleChange}
					aria-required="true"
					placeholder='Enter your email'
					aria-invalid={!!errors.email}
				/>
				{errors.email && (
					<span className='errorMsg' id="emailError" role="alert" style={{ color: 'red' }}>
						{errors.email}
					</span>
				)}
			</div>

			<div className='form-group'>
				<label className='form-label' htmlFor="message">Write your message *</label>
				<textarea
					id="message"
					name="message"
					className='form-control'
					value={formData.message}
					onChange={handleChange}
					placeholder='Write your message...'
					aria-required="true"
					aria-invalid={!!errors.message}
				/>

				{errors.message && (
					<span className='errorMsg' id="messageError" role="alert" style={{ color: 'red' }}>
						{errors.message}
					</span>
				)}
			</div>

			<div className="cta-wrapper">
				<button type="submit" className='btn btn-primary'>SEND MESSAGE</button>
			</div>

			{submitted &&
				<div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
					🎉 Your message has been successfully received.
					<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			}
			<ReCaptcha />
		</form>
	)
}

export default Form