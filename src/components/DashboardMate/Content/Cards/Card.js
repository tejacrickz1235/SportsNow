import React from 'react'
import { motion, AnimateSharedLayout } from "framer-motion";
import './Card.css'
const Card = (props) => {
    const png = props.png
  return (
    <AnimateSharedLayout>
        <motion.div onClick={()=>props.onClick(props.title)}
        className='Card'
        style={{
            backgroundImage:props.color,
        }}>
            <div style={{
                backgroundImage:"<png/>",
            }}>
                <span className='spanTitle'>{props.title}</span>
            </div> 
        </motion.div>
    </AnimateSharedLayout>
  )
}

export default Card