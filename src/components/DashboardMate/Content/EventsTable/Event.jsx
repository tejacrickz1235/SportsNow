import React from 'react'
import './Event.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
const Event = (props) => {
  return (
    
        <div className='event'>
            <div className='eventPhoto'>
                <div className='timeDiv'>
                    <span className='timeSpan'>{props.starttime}</span>
                </div>
                <div>
                    <img src='/Images/DAZN-logo.jpg' className="eventphoto"/>
                </div>
            </div>
            <div className='eventinfo'>
                <div>
                    <span className='titleSpan'>{props.title}</span>
                </div>
                <div>
                    <span className='subjectSpan'>{props.subject}</span>
                </div>
            </div>
        </div>
    
  )
}

export default Event