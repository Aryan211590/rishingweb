import React from 'react'
import Nav from '../Nav'
import './Logout.css'
import { auth } from '../firebase'
import { selectUser } from '../../Redux/features/userSlice'
import { useSelector } from 'react-redux'

const Logout = () => {
    const user =useSelector(selectUser)

  return (
    <div className='profilescreen'>
        <Nav/>
        <div className='profilescreen_body'>
        <h1>Edit Profile</h1>
        
        <div className='profilescreen_info'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TMS3IpnxpP6VTchhnk0JKf7BB-PcWyVPrQ&usqp=CAU' alt=''/>
            <div className='profilescreen_details'>
                <h2>{user.email}</h2>
                <div className='profilscreen_plans'>
                  <h3>Plans</h3>
                    <button onClick={()=>{auth.signOut()}} className='profilescreen_signout'>Sign Out</button> 
                    </div>
                </div>
            </div>
    </div></div>
  )
}

export default Logout;