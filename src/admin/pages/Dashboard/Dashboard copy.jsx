import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FireBaseAppGloble } from '../../../../context/Firebase'
import { getAuth, signOut } from "firebase/auth";
import { useFireBase } from '../../../../context/Firebase'


function Dashboard({ props }) {
	const location = useLocation();
	const user = location.state;
	const auth = getAuth(FireBaseAppGloble);
	const navigate = useNavigate()

	const handleLogout = () => {
		signOut(auth).then(() => {
			// console.log('Logout');
			navigate('/admin')
		}).catch((error) => {
			// console.log('error', error);
		});
	}
	// console.log(user);

	const fireBase = useFireBase()
	console.log(fireBase, "Dashboard");

	return (
		<div>
			<h1>dashboard</h1>
			{
				user === null ? 'Please Login'
					: null

			}
			{
				user && <>
					<p>
						<span>User: {user.displayName} | Email: {user.email}</span>
						<button className='mx-4 btn btn-danger' onClick={handleLogout}>Logout</button>
					</p>
				</>
			}


		</div>
	)
}

export default Dashboard