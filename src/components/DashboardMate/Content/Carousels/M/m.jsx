import React from 'react'
import '../Carousels.css'
const m = () => {
  return (
    <div className="card1" style={{backgroundImage: "linear-gradient(to bottom right,#d59434,#fabc4b)",backgroundSize:"cover",height:"18.5vh",borderRadius:"10px",padding:"10px 100px 10px 100px"}}>
        <div className='text1'>
            <span className='capital'>M</span><span className='rest'>AKE</span>
        </div>
        <div className='text2'>
            <div><span className='infoSpan1'>Make</span></div>
            <div><span className='infoSpan1'>And</span></div>
            <div><span className='infoSpan1'>Host your events online.</span></div>
        </div>
    </div>
  )
}

export default m