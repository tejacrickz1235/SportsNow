import React from 'react'
import './NameCard.css'
const NameCard = () => {
  return (
    <div className='Card' style={{backgroundImage: "linear-gradient(to bottom right,#52d2f3,#226491)",backgroundSize:"cover",height:"18.5vh",borderRadius:"10px",padding:"20px 100px 10px 30px"}}>
        <div className='TextLines'>
            <div>
                <span className='nameSpan'>
                    Welcome to DAZN MATE
                </span>
            </div>
            <div>
                <span className='welcomeSpan'>
                    Learn to know our services to unleash future's sports talent.
                </span>
            </div>
        </div>
    </div>
  )
}

export default NameCard