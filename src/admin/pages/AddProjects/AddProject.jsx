import React, { useState } from 'react'
import {useFireBase} from '../../../../context/Firebase'
export const AddProject = () => {
	const [proName, setProName] = useState("")
	const [proDesc, setProDesc] = useState("")
	const [proLogo, setProLogo] = useState("")

	const fireBase = useFireBase()

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fireBase.handleNewProject(proName,proDesc,proLogo)
	}
	return (
		<div className='onboarding-page project-form'>

			<h4 className='mb-5'>Add your project</h4>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput18" className="form-label">Project Name</label>
					<input value={proName} onChange={(e) => setProName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput18" placeholder="Enter your registered email id" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput19" className="form-label">Project Descripition</label>
					<input value={proDesc} onChange={(e) => setProDesc(e.target.value)} type="text" className="form-control" id="exampleFormControlInput19" placeholder="Enter your password" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput119" className="form-label">Project Logo</label>
					{/* <input 
						value={proLogo}
						onChange={(e) => setProLogo(e.target.target)}
						type="text"
						className="form-control"
						id="exampleFormControlInput119"
						placeholder="Enter your password"
					 /> */}
				</div>
				<div className="cta">
					<button type='submit' className="btn btn-primary">Add</button>
				</div>
			</form>
		</div>
	)
}
