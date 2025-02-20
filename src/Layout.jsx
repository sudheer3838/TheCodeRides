import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='web-page-wrapper'>
      <Header />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout