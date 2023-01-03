import React from 'react'
import './EventDetail.css'
import {EventsData} from '../EventsTable/Events.jsx'

const EventDetail = () => {
  return (
    <div className='EventPage'>
        <div className='EventPart1'>
            <div className='EventPhoto'>photo</div>
                <div className='infoAtRightCorner'>

                    <div className='RatingAndLikes'>
                        <div>
                            <a href="#" className='link'><span className='Rating'>Give Rating</span></a>
                        </div>
                        <div style={{display:"flex"}}>
                            <div>
                                <a href="#" className='link'><img src="/Images/heart.png" className='likeLogo'/></a>
                            </div>
                            <div>
                                <span style={{color:"white"}}>3.1K</span>
                            </div>
                        </div>
                    </div>

                    <div className='TitleLine'>
                        <span className='TitleSpan'>SIGMA</span>
                    </div>

                    <div className='bookLine'>
                        <div>
                            <span className='bookline1'>
                                Event starts on 21st Jan
                            </span>
                        </div>
                        <div>
                            <a href="#" className='link'>
                                <span className='bookline2'>
                                    Register Now!
                                </span>
                            </a>
                        </div>
                    </div>

            </div>
        </div>

        {/* SPONSORS*/ }
        {/*About Event*/}
        {/*Rules and Regulations*/}
        {/*Teams with names*/}
        {/*Live ScoreCard*/}

    </div>
  )
}

export default EventDetail