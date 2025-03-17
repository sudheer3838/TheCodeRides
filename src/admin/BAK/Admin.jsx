import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../../firebase/firebase'
import React from 'react'
import Login from './Login/Login'
import SignUp from './Signup/SignUp'

const db = getDatabase(app)

function Admin() {
  const addData = () => {
    set(ref(db, 'admin/sudhir'), {
      id: 1,
      name: "Sudhir D",
      age: 22
    })
  }
  return (
    <div className='container'>
      <div>Admin</div>
      <button onClick={addData} className='btn btn-primary'>Add</button>
      <div className="row mt-5 mb-">
        <div className="col-md-6"><Login /></div>
        <div className="col-md-6"><SignUp /></div>
      </div>      
    </div>
  )
}

export default Admin