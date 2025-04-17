import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import PortfolioFilter from './pages/Portfolio/PortfolioFilter/PortfolioFilter'
import HomeList from './components/Home'
import Admin from './admin/Admin'
import Dashboard from './admin/pages/Dashboard/Dashboard'
import { AddProject } from './admin/pages/AddProjects/AddProject'
import NotFound from './utlities/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="project-details" element={<ProjectDetails />} />
          <Route path="projects" element={<PortfolioFilter />} />
          <Route path="home" element={<HomeList />} />
          <Route path="admin" element={<Admin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
