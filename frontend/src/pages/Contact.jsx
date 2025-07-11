import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'НАШІ'} text2={'КОНТАКТИ'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Наразі бренд працює лише online.</p>
          <p className='text-gray-500 text-xl'>З радістю дамо відповіді на усі ваші питання: <br />Email: blanco.com.ua@gmail.com</p>
          
        
        
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact