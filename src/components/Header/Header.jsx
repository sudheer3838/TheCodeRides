import React from 'react'
import Logo from '../../assets/images/logo.png'
import './Header.css'
import { BrowserRouter as Router, NavLink, Route, Routes, Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Portfolio from '../../pages/Portfolio/Portfolio'
import Resume from '../../pages/Resume/Resume'
import ProjectDetails from '../../pages/ProjectDetails/ProjectDetails'
import PortfolioFilter from '../../pages/Portfolio/PortfolioFilter/PortfolioFilter'
import HomeList from '../../components/Home'
import Admin from '../../admin/Admin'
import Dashboard from '../../admin/pages/Dashboard/Dashboard'
import { AddProject } from '../../admin/pages/AddProjects/AddProject'
function Header() {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand " aria-current="page" to='/'>
						<span className='d-none'>TheCodeRides</span>
						<img src={Logo} alt="Website Logo" />
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item"><NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/about">About me</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/admin">Admin</NavLink></li>
							{/* <li className="nav-item"><NavLink className="nav-link" to="/resume">Download Resume</NavLink></li> */}

							{/* <li className="nav-item"><NavLink className="nav-link" to="/call">Call me Now</NavLink></li> */}
							<li className="nav-item dropdown d-none">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><hr className="dropdown-divider" /></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item d-none">
								<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
							</li>
						</ul>
						{/* <form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form> */}
					</div>
				</div>
			</nav>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='/contact' element={<Contact></Contact>}></Route>
				<Route path='/resume' element={<Resume></Resume>}></Route>
				<Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
				<Route path='/project-details' element={<ProjectDetails />} />
				<Route path='/projects' element={<PortfolioFilter />} />
				<Route path='/home' element={<HomeList />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/addproject' element={ <AddProject/> } />

			</Routes>
		</Router>
	)
}

export default Header