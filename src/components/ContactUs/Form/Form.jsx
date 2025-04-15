import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReCaptcha from '../../../utlities/ReCaptcha';

function Form({ isFeedbackMode, handleModalClose }) {
	const [isVerified, setIsVerified] = useState(false);
	const captchaRef = useRef(); // 👈 Add ref for ReCaptcha

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		rating: '',
		feedbackType: '',
	});
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
		setFormData({ ...formData, [name]: value });
	};

	const validate = () => {
		const errors = {};
		if (!isVerified) {
			errors.recaptcha = 'Please verify you are not a robot.';
		}
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
		if (isFeedbackMode) {
			if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
				errors.rating = 'Please provide a rating between 1 and 5.';
			}
			if (!formData.feedbackType) {
				errors.feedbackType = 'Please select a feedback type.';
			}
		}
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validate();
		if (Object.keys(validationErrors).length === 0) {
			setSubmitted(true);
			axios.post('https://67a4623231d0d3a6b78625a6.mockapi.io/clientList', {
				name: formData.name,
				email: formData.email,
				clientMessage: formData.message,
				rating: formData?.rating,
				feedbackType: formData?.feedbackType,
			});
			setFormData({ name: '', email: '', message: '', rating: '', feedbackType: '' });
			setErrors({});
			setIsVerified(false);
			captchaRef.current?.resetCaptcha(); // 👈 Reset ReCaptcha

			if (isFeedbackMode && typeof isFeedbackMode === 'function') {
				handleModalClose(); // Close modal
			}
		} else {
			setErrors(validationErrors);
		}
	};

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
				{errors.name && <span className='errorMsg' role="alert" style={{ color: 'red' }}>{errors.name}</span>}
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
				{errors.email && <span className='errorMsg' role="alert" style={{ color: 'red' }}>{errors.email}</span>}
			</div>

			{isFeedbackMode && (
				<>
					<div className='form-group'>
						<label className='form-label' htmlFor="rating">Rating (1-5)</label>
						<input
							type="number"
							name="rating"
							min="1"
							max="5"
							className='form-control'
							value={formData.rating || ''}
							onChange={handleChange}
							placeholder='Rate from 1 to 5'
						/>
						{errors.rating && <span className='errorMsg' role="alert" style={{ color: 'red' }}>{errors.rating}</span>}
					</div>

					<div className='form-group'>
						<label className='form-label' htmlFor="feedbackType">Feedback Type</label>
						<select
							name="feedbackType"
							className='form-control'
							value={formData.feedbackType || ''}
							onChange={handleChange}
						>
							<option value="">-- Select Type --</option>
							<option value="testimonial">Testimonial</option>
							<option value="suggestion">Suggestion</option>
							<option value="bugReport">Bug Report</option>
						</select>
						{errors.feedbackType && <span className='errorMsg' role="alert" style={{ color: 'red' }}>{errors.feedbackType}</span>}
					</div>
				</>
			)}

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
				{errors.message && <span className='errorMsg' role="alert" style={{ color: 'red' }}>{errors.message}</span>}
			</div>
			<ReCaptcha ref={captchaRef} setVerified={setIsVerified} />
			{errors.recaptcha && <span className='errorMsg recaptcha-error' role="alert" style={{ color: 'red' }}>{errors.recaptcha}</span>}

			<div className="cta-wrapper">
				<button type="submit" className='btn btn-primary'>SEND MESSAGE</button>
			</div>

			{submitted && (
				<div className="alert alert-success alert-dismissible fade show mt-3" role="alert" aria-live="polite">
					🎉 Your message has been successfully received.
					<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			)}

			
		</form>
	);
}

export default Form;
