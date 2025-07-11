import React from 'react'
import { assets } from '../assets/assets'
import Carousel from '../components/Carousel'

const Hero = () => {
   return (
      <div className='flex flex-col sm:flex-row border border-gray-400 sm:h-96'>
         <Carousel />
      </div>
   )
}

export default Hero