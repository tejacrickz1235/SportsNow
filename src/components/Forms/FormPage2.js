import React from 'react'
import { useState } from "react";
import './FormPage1.css'
import './FormPage2.css'
const defaultValues={
    phone:"",
    pan:"",
    aadhar:"",
    credit:"",
}
const FormPage2=()=>
{
    const [User2,setUser]=useState(defaultValues);

    const changedTo=(e)=>
    {
        setUser({...User2,[e.target.name]:e.target.value})
        console.log(User2)
    }
    return(
        <div className='container'>
        <div className='headingincontainer'>
            <div className='headingline1'>Personal Details</div>
        </div>
        <form className='formcss'>
            <br/>
            <div className='headingline2'>Hi, Laxmi. When you submit this form, the owner will see your name and email address.</div>
            <br/>
            <div className='headingline2'>* Required</div>
            <br/>
            <div className="divinform padding">
                <span className='spanformatform'>Phone Number*</span>
            </div>
            <div className="divinform">
                <input className='inputclass' type="text" name="phone" onChange={(e)=>changedTo(e)}/>
            </div>
            <br/>
            <div className="divinform">
                <span className='spanformatform padding'>Email-Address*</span>
            </div>
            <div className="divinform">
                <input className='inputclass' type="text" name="pan" onChange={(e)=>changedTo(e)}/>
            </div>
            <br/>
            <div className="divinform">
                <span className='spanformatform padding'>Aadhar Card Number*</span>
            </div>
            <div className="divinform">
                <input className='inputclass' type="text" name="aadhar" onChange={(e)=>changedTo(e)}/>
            </div>
            <br/>
            <div className="divinform">
                <span className='spanformatform padding'>Credit Card Number*</span>
            </div>
            <div className="divinform">
                <input className='inputclass' type="text" name="credit" onChange={(e)=>changedTo(e)}/>
            </div>
            <br/>
            <div className='buttoninform padding-bottom80'>
                <button className='buttonformat' >
                <span className='spanbuttonform'>SUBMIT</span>
                </button>
            </div>

            
        </form>
        <div className='footerincontainer'>

            <div className='footerline1'><p className='padding-top10'>This content is created by the owner of the form. The data you submit will be sent to the form owner.Never give out your password.</p></div>

            <div className='footerline2 padding-top15'>
                <div>Powered By DAZN Forms|</div>
                <div><a href='https://www.dazn.com/en-IN/help/articles/privacy-global' className='atag'>Privacy and cookies|</a></div>
                <div><a href='https://www.dazn.com/en-IN/help/articles/terms-global' className='atag'>Terms of use</a></div>
            </div>
        </div>
    </div>
    )
}

export default FormPage2;