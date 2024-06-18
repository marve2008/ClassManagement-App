import React from 'react'
import Login from '../components/Login'
import pic from '../assets/images/LAP.png'


const AdminLogin = () => {
    const style = {
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }
    
  return (
    <div style={style} className='adl'>
      <Login />
    </div>
  )
}

export default AdminLogin