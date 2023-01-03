import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './MainDown.css'
import Main from './Main.js'
const MainDown=()=>{

    const navigate = useNavigate()

    const signup =()=>
    {
        navigate('/signupMate')
    }
    const signin =()=>
    {
        navigate('/construction')
    }
    return (
        
        <div className='mainDown' style={{
            height: "150vh",
            backgroundImage: "url('https://d1sgwhnao7452x.cloudfront.net/US_ROW_OB_LiveAction_BG_Large_1280x800[80367].jpg')",
            backgroundSize: "cover",
            paddingTop:"30px",
            }}>
            <Main/>
            <div className='header-line'>
                <div><span className='span_header'>NEW Beginnings start with</span></div>
                <div><span className='span_header'>NEW Ideas</span></div>
            </div>

            <div class="flexbox-container">
                <div class="flexbox-item flexbox-item-1">
                    <div class='price_div'>
                        <span className='priceSpan'>Price per Plan / Event</span>
                    </div>
                    <div class="body">
                        
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Host Sport events from Anywhere</span>
                        </li>
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Stream online </span>
                        </li>
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Sports Management and Video Assistance </span>
                        </li>
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Store </span>
                        </li>
                    </div>
                    
                    <div class="head">
                        <a style={{cursor:"pointer"}} onClick={signup}>
                            <div className='linkdiv'>
                                <span className='spaninbutton'>SIGN UP NOW </span>&nbsp;<span className='spaninspaninbutton'>to be hostMATE</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flexbox-item flexbox-item-2">
                    <div class='price_div'>
                        <span className='priceSpan'>39 INR / Month </span>
                    </div>

                    <div class="body">
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Watch your favourite sport events now</span>
                        </li>
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Book and Play in sport events</span>
                        </li>
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Live, on demand and highlights </span>
                        </li>
                        <li class="list-item">
                            <img src="/Images/Tick1.png" class="tick-logo" alt="tick"/>
                            <span class='spanformat'>  Cancel Anytime </span>
                        </li>

                    </div>
                    
                    <div className="head">
                        <a style={{cursor:"pointer"}} onClick={signin}>
                            <div className='linkdiv1'>

                                <span className='spaninbutton'>SIGN UP NOW  </span>&nbsp;<span className='spaninspaninbutton'>  to PLAY</span>
                            </div>
                        </a>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default MainDown 