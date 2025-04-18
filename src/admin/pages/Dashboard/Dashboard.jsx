import React, { useEffect, useState } from 'react'
import { Link, Links, useLocation, useNavigate } from 'react-router-dom';
import { FireBaseAppGloble } from '../../../../services/context/Firebase'
import { getAuth, signOut } from "firebase/auth";
import { useFireBase } from '../../../../services/context/Firebase'
import { AddProject } from '../AddProjects/AddProject';


function Dashboard() {
	const fireBase = useFireBase()
	useEffect(() => {
		if (fireBase.isLogin) {
			console.log('FiREBASW', fireBase.isLogin, fireBase)
		}
	}, [])
	const handleLogout = () => {
		signOut(auth).then(() => {
			// console.log('Logout');
			navigate('/admin')
		}).catch((error) => {
			// console.log('error', error);
		});
	}
	// console.log(user);

	
	const [currentTab, setCurrentTab] = useState(true)
	const handleTab = (e)=>{
		setCurrentTab(e)
	}

	return (
		<>
			<div className="container-fluid admin-panel">
				<div className="row">
					<div className="col-md-3 sidebar col-lg-2">
						<h5>Welcome [user]</h5>
						<ul className="list-unstyled">
							<li>
								<button onClick={()=>handleTab(!false)}>Dashboard</button>
							</li>
							<li>
								<button onClick={()=>handleTab(!true)}>Add project</button>
							</li>
							<li><button onClick={handleLogout}>Logout</button></li>
						</ul>
					</div>
					<div className="col-md-9 col-lg-10">
						{
							currentTab ? "Dashboard" : <AddProject />
						}
					</div>
				</div>
			</div>

		</>

	)
}

export default Dashboard