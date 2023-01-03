import React from 'react'
import Management from '../Content/Cards/Management/Management'
import './EventDetail.css'


const EventDetail = (props) => {

    const m = props.management[0].toLowerCase();
    const v = props.video[0].toLowerCase();
    const s = props.stream[0].toLowerCase();
    console.log(m,v,s)
    console.log(props)

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
                        <span className='TitleSpan'>{props.eventname}</span>
                    </div>

                    <div className='bookLine'>
                        <div>
                            <span className='bookline1'>
                                Event starts on {props.starttime}
                            </span>
                        </div>
                    </div>

            </div>
        </div>

        {/* SPONSORS*/ }
        <br/>
        {/*About Event*/}
        <div className='padder'>
        <div >
            <div>
                <span className='heading'>About Event</span>
            </div>
            <div>
                <span className='body'>{props.aboutevent}.The event is organised at {props.location}.
                </span>
            </div>
        </div>
        <br/>
        {/*Address*/}
        <div>
            <div>
                <span className='heading'>Address</span>
            </div>
            <div>
                <span className='body'>{props.address},{props.pincode}</span>
            </div>
        </div>
        <br/>
        {/*Rules and Regulations*/}
        <div>
            <div>
                <span className='heading'>Rules and Regulations</span>
            </div>
            <br/>
            <div>
                <span className='body'>{props.rulesandregulations}</span>
            </div>
        </div>
        <br/>
        {/*Amount*/}
        <div>
            <div>
                <span className='heading'>Registration Fee</span>
            </div>
            <br/>
            <div>
                <span className='body'>Amount - </span><span className='body'>{props.registrationfee}</span>
            </div>
        </div>
        <br/>
        {/*Services*/}
        <div>
            <div>
                <span className='heading' >Services</span>
            </div>
            <br/>
            <div className='padder'>
                {
                (m === 'y')?
                    <div>
                <div>
                    <span className='heading'>Management</span>
                </div>
                <br/>
                <div style={{display:"flex",flexDirection:"column"}}>
                <div> <img src="/Images/blank.jpg" style={{height:"100px",width:"100px",borderRadius:"60px"}}/></div>
                    <div><span className='picInfo1'>Assigned with</span></div>
                    <div><span className='picInfo2'>Vellore Management Ltd.</span></div>
                </div>
            </div>
            : null
                }
                <br/>
                

                {
                (v === 'y')?
                    <div>
                <div>
                    <span className='heading'>Videography</span>
                </div>
                <br/>
                <div style={{display:"flex",flexDirection:"column"}}>
                <div> <img src="/Images/blank.jpg" style={{height:"100px",width:"100px",borderRadius:"60px"}}/></div>
                    <div><span className='picInfo1'>Assigned with</span></div>
                    <div><span className='picInfo2'>Creative Videographers</span></div>
                </div>
            </div>
            : null
                }
                <br/>


                {
                (s === 'y')?
                    <div>
                <div>
                    <span className='heading'>Stream</span>
                </div>
                <br/>
                <div style={{display:"flex",flexDirection:"column"}}>
                <div> <img src="/Images/blank.jpg" style={{height:"100px",width:"100px",borderRadius:"60px"}}/></div>
                    <div><span className='picInfo1'>will streamed on</span></div>
                    <div><span className='picInfo2'>DAZN PLAY</span></div>
                </div>
            </div>
            : null
                }
                
            </div>
        </div>
        <br/>
        {/*Team with names*/}
        <div>
            <div>
                <span className='heading'>Teams</span>
            </div>
            <br/>
            <div>
                <span className='picInfo1' style={{paddingLeft:"20px"}}>Regsitered teams will shown here.</span>
            </div>
        </div>
        {/*Matches List*/}
        <br/>
        <div>
            <div>
                <span className='heading'> Match Schedule </span>
            </div>
            <br/>
            <div>
                <span className='picInfo1' style={{paddingLeft:"20px"}}>Provides Match Schedule.</span>
            </div>
        </div>
        {/*Live ScoreCard*/}
        {/*Awards*/}
    </div>
    </div>
  )
}

export default EventDetail