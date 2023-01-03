import React from 'react'
import Event from '../Content/EventsTable/Event.jsx'
import '../Content/Cards/Host/Host.css'
import '../Content/EventsTable/Event.css'
import '../Content/EventsTable/Events.css'
export const AllEventsData=[
    {
        eventname:"DAZN sports",
        sportsincluded:"All sports",
        starttime:"21/01/23",
        endtime:"25/01/23",
        aboutevent:"",
        organisername:"Suresh Veluri",
        location:"Hyderabad",
        address:"H-no-3-8/228/670/B,near uppal stadium",
        city:"Hyderabad",
        state:"Telangana",
        pincode:"500063",
        eventcontact:"98763234567",
        sponsor:"DAZN",
        rulesandregulations:"",
        registrationfee:"1000",
        video:"yes",
        stream:"yes",
        management:"yes"
    }
]

const AllEvents = (props) => {
  return (
    <div className='HostForm'>
        
        <div className='form'>
        <h3>My Events</h3>
                <div className='Events' style={{display:"grid",gridTemplateColumns:"auto auto auto auto",minHeight:"100vh"}}>
                    {
                        
                        AllEventsData.map(
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
        </div>
        <div className='submit'>
            <div className='submitButton'>
                <a href="" className='atag'>
                    <span className='spanSubmit'>
                        FILTER
                    </span>
                </a>
            </div>

            <div className='infodiv'>
                <div>
                    <span className="infoSpan">About Information</span>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                    <div><span className='notes'>All events</span></div>
                    <div><span className='notes'>Sports Details</span></div>
                    <div><span className='notes'>DAZN Rights</span></div>
                </div>
            </div>
            <br/>
        </div>
</div>
    
  )
}

export default AllEvents