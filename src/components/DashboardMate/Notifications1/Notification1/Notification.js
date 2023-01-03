import React from 'react'
import Notifications from './Notifications'


const NotificationsData=[
    {
        discountMessage:"VOILA!!!Assigned with videographer",
        id:"213_management",
        eventid:"2",
        time: "1hr ago",    
    },
    {
        discountMessage:"VOILA!!!Assigned with videographer",
        id:"213_videographer",
        eventid:"2",
        time: "2hr ago",    
    },
    {
        discountMessage:"VOILA!!!Assigned with management team",
        id:"214_management",
        eventid:"1",
        time: "3hr ago",    
    },
    {
        discountMessage:"VOILA!!!Assigned with videographer",
        id:"214_videographer",
        eventid:"1",
        time: "13hr ago",    
    },
    {
        discountMessage:"VOILA!!!Assigned with videographer",
        id:"213_videographer",
        eventid:"0",
        time: "15hr ago",    
    },
    

]

const Notification = () => {
  return (
    <div className='Notify'>

        <div className='notifyBar'>
            <div className='bar1'>
                <div>
                    <span>Notifications</span>
                </div>
                <div style={{paddingTop:"10px"}}>
                    <a href="#">
                        <span>Mark all as completed</span>
                    </a>
                </div>
            </div>
            <div className='bar2'>
                <span>You've got 6 recommendations to solve</span>
            </div>
        </div>


        <div className="Notifications">
        
        {
        NotificationsData.map(
            (note, id) => {
            
            return (
                <div>
                    <div className="parentContainer" key={id}>
                        <Notifications
                            Message={note.discountMessage}
                            id = {note.id}
                            eventid = {note.eventid}
                            time={note.time}             
                        />
                        
                    </div>
                    
                </div>
            );
        })}

        </div>

    </div>
  )
}

export default Notification