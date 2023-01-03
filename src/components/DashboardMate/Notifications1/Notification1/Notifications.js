import React from 'react'
import './Notification.css'

const Notifications = (props) => {
    
  return (
    
        <div className='NotificationCard'>
            <div className='NotificationCard-message'>
                <img src="/Images/order.jpeg" alt="photo"/>
                <div>
                    <div>
                        <span className='span1'>{props.Message}</span>&nbsp;
                        <span className='span2'>{props.time}</span>
                    </div>
                    <div className='nota'>
                        <span className='span3'>Now, you can chat with the
                        <span style={{color:"black",fontWeight:"bold",}}> Team #{props.id} </span> 
                        for 
                        <span style={{color:"black",fontWeight:"bold",}}> Event #{props.eventid}</span> </span>
                        
                    </div>
                </div>
            </div>
            <div className='NotificationCard-review'>
                <a href=""><span>Review</span></a>
            </div>
            
        </div>
  )
}

export default Notifications