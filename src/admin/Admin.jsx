import React, { useEffect } from 'react'
import { FireBaseProvider, useFireBase } from '../../context/Firebase'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';


function Admin() {
  const fireBase = useFireBase();
  // {fireBase == null ? 'Null' : fireBase.isUserLogin.email}
  const [showPage, setShowPage] = useState(true)
  const handleRenderPage = (e) => {
    setShowPage(e)
  }
  console.log(fireBase, 'admin');

  const navigate = useNavigate()



  return (
    <>
    
      {
        fireBase.isLogin ? <Dashboard /> :
        <div className='admin-container onboarding--page'>          
          <div className="row">
            <div className="col-md-3 col-lg-3 onboarding--banner">
              <img src="https://job-static.hirist.com/V8/static/media/login_bkg.993f4d3c.jpg" alt="" />
              <div className="banner-overlap">
                <h1>Welcome Guest</h1>
              </div>
            </div>
            <div className="col-md-9  col-lg-9">
              {
                showPage ? <Login event={handleRenderPage} /> : <Register event={handleRenderPage} />
              }
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Admin