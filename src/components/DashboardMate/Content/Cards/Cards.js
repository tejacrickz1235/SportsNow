import React from 'react'
import './Cards.css';
import Card from './Card.js'
import { useNavigate } from 'react-router-dom';
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
    CalendarOutlined
  } from '@ant-design/icons';

const CardsData=[
    {
        title: "Host",
        png:GlobalOutlined,
        color:"linear-gradient(to bottom right,#208cd4,#52d2f3)",
    },
    {
        title: "Management",
        png:TeamOutlined,
        color:"linear-gradient(to bottom right,#3d9682,#57d0ba)",
    },
    {
        title: "Videography",
        png:VideoCameraOutlined,
        color:"linear-gradient(to bottom right,#d59434,#fabc4b)",
    },
    {
        title: "Stream",
        png:PlaySquareOutlined,
        color:"linear-gradient(to bottom right,#da434e,#f27581)",
    },

]


const Cards = (props) => {
    const navigate =useNavigate()

    const handler =(x)=>
    {
        navigate(`/Mate/${x}`)
        props.setPATH(`/Mate/${x}`)
    }
  return (
    
    <div className='Cards'>

        {
                CardsData.map(
                    (card)=>{
                        return(
                            < >
                                <Card
                                    title={card.title}
                                    color={card.color}
                                    png={card.png}
                                    onClick={handler}
                                />
                            </>
                        )
                    }
                )
                
            }
    </div>
  )
}

export default Cards