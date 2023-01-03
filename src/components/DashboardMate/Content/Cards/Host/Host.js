import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Host.css'

const defaultValues={
    eventname:"",
    aboutevent:"",
    organisername:"",
    location:"",
    endtime:"",
    starttime:"",
    address:"",
    city:"",
    state:"",
    pincode:"",
    eventcontact:"",
    sponsor:"",
    sportsincluded:"",
    rulesandregulations:"",
    registrationfee:"",
    video:"",
    stream:"",
    management:"",
    photo:"/Images/profile.jpg",
}
const Host = () => {
    

    const navigate = useNavigate() 

    const [HostForm,setHostForm]=useState(defaultValues);
    
    const changedTo=(e)=>
    {
        setHostForm({...HostForm,[e.target.name]:e.target.value})
        console.log(HostForm)
    }


    const submitData=(Data)=>
    {
        const values =JSON.parse(sessionStorage.getItem("data"));
        values.push(Data)
        console.log(values)
        sessionStorage.setItem("data",JSON.stringify(values))
        console.log(values)
        navigate(`/Mate`)
    }
  return (
    <div className='HostForm'>

      <div className='form'>
          <div className='heading'>
              <div>
                  <span className='spanHeading'>
                      HOST AN EVENT
                  </span>
              </div>
              <div>
                  <span className='spanHeadinginfo'>
                      Create your event to host it.
                  </span>
              </div> 
          </div>

          <div>
            <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>
              Kindly fill the below form according to the given instructions.
            </span>
          </div>
          <div className='form'>

                  <div className='heading'>
                      <div>
                          <span style={{fontSize:"24px"}}className='spanHeading'>
                              EVENT DETAILS
                          </span>
                      </div>
                  </div>

                  <div>
                      <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>Indicates Required</span>
                  </div>


                  {/* questions */}
                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Title</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder="Enter Event Name" name="eventname" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>About Event</span>
                        </div>
                        <div className='answer'>
                            <textarea type="text" className='answerInput'rows="8" cols="40" style={{height:"100px",padding:"10px",}}  placeholder="Describe about event" name="aboutevent" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Organiser Name</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter Organiser Name' name="organisername" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Location</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter Location Name' name="location" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Start Date</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='dd/mm/yy' name="starttime" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>End Date</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='dd/mm/yy' name="endtime" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Address</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter Event Address' name="address" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>City</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter City Name' name="city" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>State</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter State Name' name="state" onChange={(e)=>changedTo(e)}required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Pin Code</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter Pin Code' name="pincode" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Contact</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter Event Contact' name="eventcontact" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Sponsor</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' placeholder='Enter Sponsor name' name="sponsor" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>
                  <br/>
                </div>

              {/* Sport Details */}
              <br/>
              <div className='form'>


                  <div className='heading'>
                      <div>
                          <span style={{fontSize:"24px"}}className='spanHeading'>
                              SPORTS DETAILS
                          </span>
                      </div>
                  </div>

                  <div>
                      <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>Indicates Required</span>
                  </div>
                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Sports Included</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' name="sportsincluded" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Rules and Regulations</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' name="rulesandregulations" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>

                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>Registration fee</span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' name="registrationfee" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>
                  <br/>
              </div>

              {/* DAZN VIDEO */}
              <br/>
              <div className='form'>


                  <div className='heading'>
                      <div>
                          <span style={{fontSize:"24px"}}className='spanHeading'>
                              VIDEO ASSISTANCE DETAILS
                          </span>
                      </div>
                  </div>

                  <div>
                      <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>Indicates Required</span>
                  </div>
                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>
                              Need Video coverage assistance from DAZN?
                            </span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' name="video" placeholder="yes or no" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>
                  <br/>
              </div>

                {/* DAZN STREAM */}
                <br/>
              <div className='form'>


                  <div className='heading'>
                      <div>
                          <span style={{fontSize:"24px"}}className='spanHeading'>
                              VIDEO STREAMING DETAILS
                          </span>
                      </div>
                  </div>

                  <div>
                      <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>Indicates Required</span>
                  </div>
                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>
                                    Do you want your event to streamed online on DAZN PLAY?
                            </span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' name="stream" placeholder="yes or no" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>
                  <br/>
              </div>

              {/* DAZN MANAGEMENT */}
              <br/>
              <div className='form'>


                  <div className='heading'>
                      <div>
                          <span style={{fontSize:"24px"}}className='spanHeading'>
                              MANAGEMENT DETAILS
                          </span>
                      </div>
                  </div>

                  <div>
                      <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>Indicates Required</span>
                  </div>
                  <div className='questionDiv'>
                        <div className='question'>
                            <span style={{color:"red"}}>* </span><span className='questionSpan'>
                                    Do you want your event to managed and organised on behalf of DAZN?
                            </span>
                        </div>
                        <div className='answer'>
                            <input type="text" className='answerInput' name="management" placeholder="yes or no" onChange={(e)=>changedTo(e)} required/>
                        </div>
                  </div>
                  <br/>
              </div>
              <br/>
              <br/>
      </div> 

      <div className='submit'>

        <div className='submitButton'>
            <a href="" onClick={()=>submitData(HostForm)} className='atag'>
                <span className='spanSubmit'>
                    SUBMIT
                </span>
            </a>
        </div>

        <div className='infodiv'>
            <div>
                <span className="infoSpan">Required Information</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <div><span className='notes'>Event Details</span></div>
                <div><span className='notes'>Sports Details</span></div>
                <div><span className='notes'>DAZN Services</span></div>
            </div>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default Host