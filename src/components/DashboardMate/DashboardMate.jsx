import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Content1 from './Content/Content.jsx';
import RaiseATicket from './RaiseATicket/RaiseATicket.js';
import Host from './Content/Cards/Host/Host'
import Navbar from './Navbar/Navbar'
import EventDetail from './MyEvents/EventDetail.jsx'
import Notifications from './Notifications1/Notification1/Notification'
import Construction from './construction/construction'
import './DashboardMate.css'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined ,
  FormOutlined,
  PlaySquareOutlined ,
  GlobalOutlined,
  CalendarOutlined,
  HomeOutlined ,
  SoundOutlined 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Management from './Content/Cards/Management/Management.js';
import Videography from './Content/Cards/Videography/Videography.js';
import Stream from './Content/Cards/Stream/Stream.js';
import AllEvents from './AllEvents/AllEvents.js';
import MyProfile from './MyProfile/MyProfile.js';
import CreateABlog from './CreateABlog/CreateABlog.jsx';

const { Header, Content, Footer, Sider } = Layout;





const DashboardMate = () => {
  const navigate = useNavigate();
    function getItem(label, key, icon, children) {
      return {
        key,
        icon,
        children,
        label,
      };
    }
    const items = [
      getItem('Home', '', <HomeOutlined />),
      getItem('Services', 'nothing', <PieChartOutlined />, [
        getItem('Host', 'Host',<GlobalOutlined />),
        getItem('Management', 'Management',<TeamOutlined/>),
        getItem('Videography', 'Videography',<VideoCameraOutlined />),
        getItem('Stream', 'Stream',<PlaySquareOutlined />),
        
      ]),
      getItem('Create a Blog', 'CreateABlog',<FormOutlined />),
      getItem('My Events', 'AllEvents', <DesktopOutlined />),
      getItem('My Profile', 'MyProfile', <UserOutlined />),
      getItem('Raise a Ticket', 'RaiseATicket', <SoundOutlined />),
    
    ];
  const [collapsed, setCollapsed] = useState(false);
  const [PATH,setPATH]= useState('')
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [detailEvent, setdetailEvent] = useState([]);

  const detailedEvent = (event) => {
    navigate(`/Mate/detailedEvent`);
    setPATH(`/Mate/detailedEvent`);
    setdetailEvent(event);
  }
  useEffect(()=>{
    setPATH(window.location.pathname);
  },[PATH])

  const onClick = (e) =>
  {
    if(e.key !== '')
    {
      navigate(`/Mate/${e.key}`)
      setPATH(`/Mate/${e.key}`)
    }
    else
    {
      navigate(`/Mate`)
      setPATH(`/Mate`)
    }

  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
        position:"relative",
        
      }}
    >
     
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{display:"flex",}}>
          <div>
            <img src="/Images/DAZN.png" alt="photo" style={{height:"55px",width:"60px"}} className='logoDAZN'/>
          </div>
          <div>
          {
            (!collapsed)?<span style={{marginTop:"15px",
              fontSize: "20px",
              fontFamily: "cursive",color:"white"}}>&nbsp;MATE</span>:<span></span>
          }
          </div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick}/>
      </Sider>

      <Layout className="site-layout">

          <Navbar/>
          {(() => {

            if(PATH === "/SportsNow/Mate") {
              return (
                <Content1 setPATH={setPATH} detailedEvent={detailedEvent}/>
              )
              }

            else if(PATH === "/Mate/Host") {
              
              return (
                
                  <Host />
                
              )        
            }
            else if(PATH === "/Mate/Management") {
              
              return (
                
                  <Construction/>
                
              )        
            }
            else if(PATH === "/Mate/Videography") {
              
              return (
                
                <Construction/>
                
              )        
            }
            else if(PATH === "/Mate/Stream") {
              
              return (
                
                <Construction/>
                
              )        
            }
            else if(PATH === "/Mate/CreateABlog") {
              
              return (
                
                <Construction/>
                
              )        
            }
            else if(PATH === "/Mate/AllEvents") {
              
              return (
                
                  <AllEvents setPATH={setPATH} detailedEvent={detailedEvent}/>
                
              )        
            }
            else if(PATH === "/Mate/MyProfile") {
              
              return (
                
                  <MyProfile/>
                
              )        
            }
            else if(PATH === "/Mate/RaiseATicket") {
              return (
                <RaiseATicket/>
              )
            }
            else if(PATH === "/Mate/detailedEvent") {
              return (
                <EventDetail {...detailEvent}/>
              )
            }
            else if(PATH === "/Mate/Notifications") {
              return (
                <Notifications/>
              )
            }
            else {
              return (
                <Content1 setPATH={setPATH} detailedEvent={detailedEvent}/>
              )
            }
          })()}
          

          <Footer style={{ textAlign: 'center',backgroundColor:"white" }}>
              DAZN Mate ©2022 Created by Tej
          </Footer>

      </Layout>


    </Layout>
  );
};
export default DashboardMate;