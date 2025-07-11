import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
   return (
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

         <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
            <p className='font-semibold'>Політика легкого обміну</p>
            <p className='text-gray-400'>Нова пропозиція політики безпроблемного обміну</p>
         </div>

         <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
            <p className='font-semibold'>Політика повернення протягом 7 днів</p>
            <p className='text-gray-400'>Ми пропонуємо безкоштовне повернення протягом 7 днів</p>
         </div>

         <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
            <p className='font-semibold'>Найкраща підтримка клієнтів</p>
            <p className='text-gray-400'>Ми забезпечуємо постійну підтримку клієнтів</p>
         </div>

      </div>
   )
}

export default OurPolicy