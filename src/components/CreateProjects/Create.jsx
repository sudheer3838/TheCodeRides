// useEffect(() => {
    
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       setData(response.data);
     
      
//     })
//     .catch(error => {
//       console.error('Error fetching data: ', error);
//     });
//   }, [])
import React, { useState } from 'react'
import axios from 'axios'
function Create() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [email, setEmail] = useState('')
	const handleSubmit = (e) =>{
		e.preventDefault() ;
		axios.post('https://676abc6d863eaa5ac0df7563.mockapi.io/userData', {
			e_name: name,
			e_age:age,
			e_email:email
		});
	}
	return (
		<div className='row'>
			<div className="col-md-4 offset-4 mx-auto1">
				<h2>Create Data</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-4">
						<input onChange={(e)=>{setName(e.target.value)}} type="text" className='form-control' placeholder='Enter name' />
					</div>
					<div className="form-group mb-4">
						<input onChange={(e)=>{setAge(e.target.value)}} type="number" className='form-control' placeholder='Enter age' />
					</div>
					<div className="form-group mb-4">
						<input onChange={(e)=>{setEmail(e.target.value)}}  type="email" className='form-control' placeholder='Enter email' />
					</div>
					<div className="cta-btn mb-4 d-grid">
						<input type="submit" value='Submit' className='btn btn-primary' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Create

// https://676abc6d863eaa5ac0df7563.mockapi.io/userData