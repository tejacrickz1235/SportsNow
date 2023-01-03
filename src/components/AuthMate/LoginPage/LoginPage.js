import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './LoginPage.css'
import Main from '../../Main/Main.js'

const defaultValues={
    email:"",
    password:"",

}
 
const LoginPage = ()=>{
    
    const navigate = useNavigate()
    const onClickHandler = () => navigate(`/signupMate`)
    const signinto=()=>navigate(`/Mate`)

    const [LoginUser,setLoginUser]=useState(defaultValues);
    
    const changedTo=(e)=>
    {
        setLoginUser({...LoginUser,[e.target.name]:e.target.value})
        console.log(LoginUser)
    }



    const handleLogin=(User)=>
    {
        
       const checkForpassword=(pass,arr)=>
       {
         for(var i=0;i<arr.length;i++)
         {
            if(pass===arr[i])return true;
         }
         return false;
       }
        const email = User.email;
        const pass = User.password;
        var storedValues = JSON.parse(localStorage.getItem(email));
        var store1 = JSON.parse(localStorage.getItem(email));
        if(storedValues==undefined)
        {
            alert("no email exist")
        }
        else if(checkForpassword(pass,storedValues)===false)
        {
            alert("password wrong!!!")
        }
        else{
            store1.push(email)
            sessionStorage.setItem("email",JSON.stringify(store1))
            sessionStorage.setItem("data",JSON.stringify([]))
            navigate(`/Mate`)
        }

    }


    return(
        <div style={{
            height: "100vh",
            backgroundImage: "url('https://d1sgwhnao7452x.cloudfront.net/US_ROW_OB_LiveAction_BG_Large_1280x800[80367].jpg')",
            backgroundSize: "cover",
            paddingTop:"30px",
            }}>
                <Main/>
        <div className='logincss'>
            <div className='loginheading'>
                <span className='headingformatinlform'>LOG IN</span>
            </div>
            <br/>
            <form className='loginform'>
                <div className="divinlform">
                    <span className='spanformatinlogin'>Email-Address*</span>
                </div>
                <div className="divinlform">
                    <input className='inputclassinlogin' type="email" name="email" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className="divinlform">
                    <span className='spanformatinlogin'>Password*</span>
                </div>
                <div className="divinlform">
                    <input className='inputclassinlogin' type="password" name="password" onChange={(e)=>changedTo(e)}/>
                </div>
                <div className='divbuttonlform'>
                    <button className='buttonformatinform' onClick={(e)=>handleLogin(LoginUser,e)}>
                        <span className='spaninlform'>SIGN IN</span>
                    </button>
                </div>
                <div className='loginfooterfirst'>
                    <a href="#" style={{ color: 'yellow',textDecorationLine:'yellow'}}>
                        <span className='loginfooterfirstspan'>Forgot Password?</span>
                    </a>
                </div>
                <br/>
                <div className='loginfooterlast'>
                    <div>
                        <span className='loginfooterlastspan'>
                            Don't have an account?
                        </span>
                    </div>
                    <div>
                        <a onClick={()=>onClickHandler()} className='loginatag' >
                            <span className='loginfooterlastspan' style={{ color: 'yellow',textDecorationLine:'yellow'}}>
                                 Signup
                            </span>  
                        </a>
                    </div>
                </div>
            </form>
        </div>
        </div>
        
    )
}
export default LoginPage;