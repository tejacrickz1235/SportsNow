import React from 'react'
import M from './M/m.jsx'
import A from './A/A.jsx'
import T from './T/T.jsx'
import E from './E/E.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import NameCard from './NameCard/NameCard'

const Carousels = () => {
  return (
    <Carousel infiniteLoop autoPlay>
        <NameCard/>
        <M/>
        <A/>
        <T/>
        <E/> 
    </Carousel>
  )
}

export default Carousels