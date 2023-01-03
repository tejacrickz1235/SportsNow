import React from 'react'
import './Events.css'
import Event from './Event.jsx'

export const EventsData =[
    {
        eventname:"DAZN sports",
        sportsincluded:"All sports",
        starttime:"21/01/23",
        endtime:"25/01/23",
        aboutevent:"This is the prestigious tournament organised by DAZN where everyone can participate around the world.",
        organisername:"Suresh Veluri",
        location:"Hyderabad",
        address:"H-no-3-8/228/670/B,near uppal stadium",
        city:"Hyderabad",
        state:"Telangana",
        pincode:"500063",
        eventcontact:"98763234567",
        sponsor:"DAZN",
        rulesandregulations:"Follow basic rules from https://www.sportzvision.com/sports-rules.html",
        registrationfee:"1000",
        video:"yes",
        stream:"yes",
        management:"yes",
        photo:'/Images/DAZN-logo.jpg'
    }
]

const Events = (props) => {
  return (
    <div className='Events'>
              {
                
                EventsData.map(
                    (event)=>{
                       
                        return(
                            
                            <a onClick={() => props.detailedEvent(event)}>
                                <Event
                                    title={event.eventname}
                                    subject={event.sportsincluded}
                                    photo={event.photo}
                                    starttime={event.starttime}
                                    endtime={event.endtime}
                                    description={event.aboutevent}
                                    organiserName={event.organisername}
                                    location={event.location}
                                    address={event.address}
                                    city={event.city}
                                    state={event.state}
                                    pincode={event.pincode}
                                    contact={event.eventcontact}
                                    sponsor={event.sponsor}
                                    rulesandregulations={event.rulesandregulations}
                                    registrationfee={event.registrationfee}
                                    video={event.video}
                                    stream={event.stream}
                                    management ={event.management}
                                />
                            </a>
                        )
                    }
                )
                
            }
            {
               JSON.parse(sessionStorage.getItem("data")).map(
                    (event)=>
                    {
                        return(
                            <a onClick={() => props.detailedEvent(event)}>
                                <Event
                                    title={event.eventname}
                                    subject={event.sportsincluded}
                                    photo={event.photo}
                                    starttime={event.starttime}
                                    endtime={event.endtime}
                                    description={event.aboutevent}
                                    organiserName={event.organisername}
                                    location={event.location}
                                    address={event.address}
                                    city={event.city}
                                    state={event.state}
                                    pincode={event.pincode}
                                    contact={event.eventcontact}
                                    sponsor={event.sponsor}
                                    rulesandregulations={event.rulesandregulations}
                                    registrationfee={event.registrationfee}
                                    video={event.video}
                                    stream={event.stream}
                                    management ={event.management}

                                />
                            </a>
                        )
                    }

               )
            }
    </div>
  )
}

export default Events