import React from 'react'
import SwitchUse from './SwitchUse'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const navigate = useNavigate()
  const goProfile =()=>
  {
    console.log("profilke")
    navigate(`/Mate/MyProfile`)
}
  const logout=()=>{
    console.log("C:LICKNL")
    navigate(`/`)
  }
  const notifications=()=>{
    console.log("C:LICKNL")
    navigate(`/Mate/Notifications`)
  }
  const path=window.location.pathname;
  return (
    <div className='Navbar'>
      <div className='Navhead'>
        <div className='Nav1'>
          {
          (path === '/Mate')?
          <span>Dashboard</span>:null
          }
        </div>
        <div className='Nav2'>
          <a href='#' className='padder123 '><img src="/Images/search.svg" className='svgs'/></a>
          <a href="#" onClick={notifications} className='padder123 css-300-gone'><span><img src="/Images/notification.svg" className='svgs'/></span></a>
          <a className="link" href=""><span>Need Help?</span></a>
        </div>
        <div className='line'></div>
        <div className='Nav3'>
           <a onClick={goProfile}><img src="/Images/profile.jpg" style={{width:"23px",height:"23px",borderRadius:"60px"}}  alt='p'/></a>
           <span style={{fontSize:"12px",fontWeight:"bold",paddingTop:"5px",color:"rgba(0,0,0,0.5)"}}>Hi,USER</span>
           <a href="#" onClick={logout} className='padder123 '><img src="/Images/log-outt.svg" className='svgs'/></a>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar