import React from 'react'
import { useState} from 'react';
import './FormPage1.css'
import useNavigate  from 'react'
import {NavLink} from 'react-router-dom'
const defaultValues={
    name:"",
    email:"",
    department:"",
    title:"",
    address:"",
}



const FormPage1=()=>
{
   
    const [User,setUser]=useState(defaultValues);
    
    const changedTo=(e)=>
    {
        setUser({...User,[e.target.name]:e.target.value})
        console.log(User)
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
                <div className="divinform padding" >
                    <span className='spanformatform'>Name*</span>
                </div>
                <div className="divinform padding">
                    <input className='inputclass' type="text" name="name" onChange={(e)=>changedTo(e)}/>
                </div>
                <br/>
                <div className="divinform padding">
                    <span className='spanformatform'>Email-Address*</span>
                </div>
                <div className="divinform">
                    <input className='inputclass' type="email" name="email" onChange={(e)=>changedTo(e)}/>
                </div>
                <br/>
                <div className="divinform padding">
                    <span className='spanformatform'>Department*</span>
                </div>
                <div className="divinform ">
                    <input className='inputclass' type="text" name="dept" onChange={(e)=>changedTo(e)}/>
                </div>
                <br/>
                <div className="divinform padding">
                    <span className='spanformatform'>Job Title*</span>
                </div>
                <div className="divinform">
                    <input className='inputclass' type="text" name="title" onChange={(e)=>changedTo(e)}/>
                </div>
                <br/>
                <div className="divinform padding">
                    <span className='spanformatform'>Address*</span>
                </div>
                <div className="divinform">
                    <input type="textarea" name="address" onChange={(e)=>changedTo(e)}/>
                </div>
                <br/>
                <NavLink to='/new/forms2'>
                    <div className='buttoninform'>
                        <button className='buttonformat' >
                            <span className='spanbuttonform'>NEXT&gt;</span>
                        </button>
                    </div>
                </NavLink>

                <br/>
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

export default FormPage1;