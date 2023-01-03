
import React from 'react'
import Cards from './Cards/Cards'
import Events from './EventsTable/Events'
import Carousels from './Carousels/Carousels'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Footer, Sider } = Layout;


const Content = (props) => {

  const values= sessionStorage.getItem("email");
  const arr = values.split(",")
  const firstName= arr.at(3).replaceAll('"','');
  const lastName = arr.at(4).replaceAll('"','')

  console.log(arr,firstName,lastName)
  
  return (
    <div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.2rem",padding:"10px 0px 10px 30px",justifyContent:"center"}}>
        <div style={{fontFamily:"sofia-pro, sans-serif",fontSize:"20px",fontWeight:"bold"}}>
          <span style={{color:"rgba(0,0,0,0.6)",}}>
            Hello,
          </span>
          <span style={{color:"#03254c",}}>
            {firstName} &nbsp;
            {lastName}
          </span>
        </div >
        <div style={{fontFamily:"sofia-pro, sans-serif",fontSize:"13px"}}>
          <span style={{color:"#03254c",}}>
            Welcome to dashboard
          </span >
        </div>
      </div>
      <div style={{padding:"30px"}}>
        <Carousels/>
      </div>
      
      <div style={{padding:"25px",marginTop:"-80px"}}>
        <h3 style={{color:"#03254c",}}>Services</h3>
        <Cards setPATH={props.setPATH}/>
        <h3 style={{color:"#03254c",}}>My Events</h3>
        <Events detailedEvent={props.detailedEvent}/>
      </div>
    </div>
  )
}

export default Content