import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Return = () => {
   return (
      <div>

         <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ПОВЕРНЕННЯ ТА'} text2={'ОБМІН'} />
         </div>

         <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.return_img} alt='' />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
               <p>1. Повернення можливе протягом 14 днів після замовлення, але будемо вдячні, якщо повідомите якомога швидше та вкажете причини повернення.</p>
               <p>2. Кошти повертаємо після отримання та огляду товару (товар та пакування повинні бути в стані, як при отриманні, а якщо ми виявимо дефект на одязі при огляді у поверненні буде відмовлено).</p>
               <p>3. Повернення коштів здійснюється протягом 10-ти днів після отримання товару.</p>
               <p>4. Обмін здійснюємо протягом 14-ти днів після замовлення, якщо одяг отримали в стані, як при отриманні. Оплата доставки при обміні на отримувачі. *ВИКЛЮЧЕННЯ! Якщо одяг мав брак чи несправність.</p>
            </div>
         </div>

         <NewsletterBox />

      </div>
   )
}

export default Return