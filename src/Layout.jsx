import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="web-page-wrapper">
      <Header />
      <main className="main-information-page">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
