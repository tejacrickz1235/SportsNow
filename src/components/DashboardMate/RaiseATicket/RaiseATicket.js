import React from 'react'
import './RaiseATicket.css'
const RaiseATicket = () => {
  return (
    <div className='ticketForm'>
        <div className='form'>

            <div className='heading'>
                <div>
                    <span className='spanHeading'>
                        RAISE A TICKET
                    </span>
                </div>
                <div>
                    <span className='spanHeadinginfo'>
                        Report an issue you are experiencing
                    </span>
                </div> 
            </div>

            {/* <div className='line'></div> */}
            <br/>

            <div>
                <span style={{color:"red"}}>*</span><span style={{color:"black",fontStyle:"italic",fontSize:"16px",}}>Indicates Required</span>
            </div>


            <div className='questionDiv'>
                <div className='question'>
                    <span style={{color:"red"}}>* </span><span className='questionSpan'>Subject</span>
                </div>
                <div className='answer'>
                    <input type="text" className='answerInput' required/>
                </div>
            </div>


            <div className='questionDiv'>
                <div className='question'>
                    <span style={{color:"red"}}>* </span><span className='questionSpan'>Description</span>
                </div>
                <div className='answer'>
                    <textarea rows="8" cols="40" style={{height:"300px",padding:"10px",}} className='answerInput' required></textarea>
                </div>
            </div>


        </div>

        <div className='submit'>

            <div className='submitButton'>
                <a href="" className='atag'>
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
                    <div><span className='notes'>Service</span></div>
                    <div><span className='notes'>Short Description</span></div>
                </div>
            </div>
            <br/>
        </div>

    </div>
  )
}

export default RaiseATicket