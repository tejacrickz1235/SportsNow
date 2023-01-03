import React from 'react'
import logo from '../../Images/DAZN1.jpg'
import './Main.css'
import getRenderedSize from 'react-rendered-size';
const Main =()=>
{
    const my={
        backgroundImage: "url('https://d1sgwhnao7452x.cloudfront.net/US_ROW_OB_LiveAction_BG_Large_1280x800[80367].jpg')",
        height:'100vh',
        backgroundSize: 'cover',
    
    };

    return(
        <div className='main'>
            <header className='navbar1'>
                
                <img className='logo' src="/Images/DAZN.png" style={{height:"55px",width:"75px"}} alt="MYPIC"/>
                <a className='cta' href='https://www.dazn.com/en-IN/home'>
                    <button className='buttonformatinmain'>
                        <span class="spanformat2">Explore <italic>DAZN</italic></span>
                    </button>
                </a>           
            </header>
        </div>
        
        
    )
}

export default Main
