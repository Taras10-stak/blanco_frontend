import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer = () => {
   return (
      <div>
         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
               <img src={assets.logo} className='mb-5 w-32' alt='' />
               <p className='w-full md:w-2/3 text-gray-600'>
                  BLANCO — сучасний стиль у кожній деталі.
                  Ми створюємо одяг, що поєднує комфорт, високу якість і актуальний дизайн. BLANCO — це вибір для тих, хто хоче виглядати впевнено щодня.
               </p>
            </div>

            <div>
               <p className='text-xl font-medium mb-5'>КОМПАНІЯ</p>
               <ul className='flex flex-col gap-1 text-gray-600'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/about' className=''>
                     <li>Про нас</li>
                  </NavLink>
                  <NavLink to='/delivery' className=''>
                     <li>Доставка та оплата</li>
                  </NavLink>
                  <NavLink to='/return' className=''>
                     <li>Повернення та обмін</li>
                  </NavLink>
               </ul>
            </div>

            <div>
               <p className='text-xl font-medium mb-5'>ЗВ'ЯЗОК З НАМИ</p>
               <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>Наразі бренд працює лише online. З радістю дамо відповіді на усі ваші питання:</li>
                  <li>blanco.com.ua@gmail.com</li>
               </ul>

               <div className='flex items-center gap-4 mt-3 text-gray-700 text-2xl'>
                  <a href="https://t.me/Diana_Mal" target='_blank' rel="noopener noreferrer">
                     <FaTelegramPlane className='hover:text-blue-500 transition' />
                  </a>
                  <a href="https://www.instagram.com/blanco.ua?igsh=MWc4NW9hdHV2ZXh6Ng==" target='_blank' rel="noopener noreferrer">
                     <FaInstagram className='hover:text-pink-500 transition' />
                  </a>
               </div>
            </div>

         </div>

         <div>
            
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2025</p>
         </div>

      </div>
   )
}

export default Footer




