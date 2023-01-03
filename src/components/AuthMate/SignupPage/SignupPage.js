import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './SignupPage.css'

import Main from '../../Main/Main.js'
const defaultValues={
    username:"",
    firstname:"",
    lastname:"",
    email:"",
    password1:"",
    password2:"",
    dob:"",
    location:"",
    gender:"",
}


const SignupPage = ()=>{

    const navigate = useNavigate()
    const onClickHandler = () => navigate(`/loginMate`)

    const [RegisterUser,setRegisterUser]=useState(defaultValues);
    
    const changedTo=(e)=>
    {
        setRegisterUser({...RegisterUser,[e.target.name]:e.target.value})
        console.log(RegisterUser)
    }



    const storeAndgotoLogin=(User,e)=>
    {
        e.preventDefault()
        const checkForUserDuplication=(user)=>
        {
            if(localStorage.length==0)return true;
            
            for(var i=0;i<localStorage.length;i++)
            {
            
                if(localStorage.key(i)==user)
                    return false;
            
            }
            return true;

        }
        const user = User.username;
        const email = User.email;
        const pass1 = User.password1;
        const pass2 = User.password2;
        const firstname = User.firstname;
        const lastname = User.lastname;
        const location = User.location;
        const dob = User.dob;
        if(checkForUserDuplication(email)===false)
        {
            alert("Email already Exists");
        }
        else if(pass1!=pass2)
        {
            alert("Passwords are not Matching!!!");
        }
        else{
            const arr =[user,pass1,pass1,firstname,lastname,location,dob,User.gender]
            localStorage.setItem(email,JSON.stringify(arr))
            navigate(`/loginMate`)
        }
    
        

    }

    return(
        <div style={{
            height: "150vh",
            backgroundImage: "url('https://d1sgwhnao7452x.cloudfront.net/US_ROW_OB_LiveAction_BG_Large_1280x800[80367].jpg')",
            backgroundSize: "cover",
        
            paddingTop:"30px",
            }}>
                <Main/>
        <div className='signupcss'>
            <div className='signupheading'>
                <span className='headingformatinsform'>REGISTER</span>
            </div>
            <br/>
            <form className='signupform' >
                <div className="divinsform">
                    <span className='spanformatinsignup'>Username*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="text" name="username" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Email-Address*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="email" name="email" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Password*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="password" name="password1" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Re-Enter Password*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="password" name="password2" onChange={(e)=>changedTo(e)}/>
                </div>

                <div className="divinsform">
                    <span className='spanformatinsignup'>First Name*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="text" name="firstname" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Last Name*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="text" name="lastname" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Date of Birth*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="text" name="dob" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Location*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="text" name="location" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinsform">
                    <span className='spanformatinsignup'>Gender*</span>
                </div>
                <div className="divinsform">
                    <input className='inputclassinsignup' type="text" name="gender" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className='divbuttonsform'>
                    <button className='buttonformatinform' onClick={(e)=>storeAndgotoLogin(RegisterUser,e)}>
                        <span className='spaninsform'>SIGN UP</span>
                    </button>
                </div>
            </form>

            
                <div className='signupfooterfirst'>
                    <div>
                        <span className='signupfooterfirstspan'>By signing up, you agree to our </span>
                    </div>
                    <div>
                        <a href="https://www.dazn.com/en-IN/help/articles/terms-global" className='signupatag'>
                            <span className='signupfooterfirstspan' style={{ color: 'yellow'}}>&nbsp;Terms of Use </span>
                        </a>
                    </div>
                    <div>
                        <span className='signupfooterfirstspan'> &nbsp; and &nbsp;</span>
                    </div>
                    <div>
                    <a href="https://www.dazn.com/en-IN/help/articles/privacy-global" className='signupatag'>
                        <span className='signupfooterfirstspan' style={{ color: 'yellow'}}>
                            
                                Privacy Policy
                                </span>
                            </a>
                    </div>
                </div>
                <br/>
                <div className='signupfooterlast'>
                    <div>
                        <span className='signupfooterlastspan'>
                            Already have an account?
                        </span>
                    </div>
                    <div>
                        <a onClick={()=>onClickHandler()} className='signupatag' >
                            <span className='signupfooterlastspan' style={{ color: 'yellow',textDecorationLine:'yellow'}}>
                                 Login
                            </span>  
                        </a>
                    </div>
                </div>
            
            <br/>
        </div>
        </div>
        
    )
}
export default SignupPage;