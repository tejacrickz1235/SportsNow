import React from 'react'
import './MyProfile.css'
const MyProfile = () => {

  const values= sessionStorage.getItem("email");
  const arr = values.split(",")
  const firstName= arr.at(3).replaceAll('"','');
  const lastName = arr.at(4).replaceAll('"','');
  const username= arr.at(0).replaceAll('"','').replaceAll('[','');
  const password = arr.at(1).replaceAll('"','');
  const location= arr.at(5).replaceAll('"','');
  const dob = arr.at(6).replaceAll('"','');
  const gender = arr.at(7).replaceAll('"','');
  const email = arr.at(8).replaceAll('"','').replaceAll(']','');
  

  const wantGender = (gender.at(0)).toLowerCase()
  console.log(firstName,lastName,username,password,location,dob,email,gender,wantGender)
  return (
    <div >
      <div className='profilecss' >
            <div className='profileinfo'>
              <div>
                <span className='q'>Name: </span> 
                <span className='a'>{firstName} {lastName}</span>
              </div>
              <div>
                <span className='q'>Username:</span> 
                <span className='a'>{username}</span>
              </div>
              <div>
                <span className='q'>Password:</span> 
                <span className='a'>{password}</span>
              </div>
              <div>
                <span className='q'>Email:</span> 
                <span className='a'>{email}</span>
              </div>
              <div>
                <span className='q'>Date of Birth:</span> 
                <span className='a'>{firstName} {lastName}</span>
              </div>
              <div>
                <span className='q'>Lives in:</span> 
                <span className='a'>{location}</span>
              </div>
              <div>
                <span className='q'>From:</span> 
                <span className='a'>{location}</span>
              </div>
            </div>


    

        <div>
            {
            (wantGender=== 'm')?<img className="profileLogo" src="/Images/male.png"/>:<img className="profileLogo" src="/Images/female.png"/>
            }
          </div>
      </div>
    </div>
  )
}

export default MyProfile