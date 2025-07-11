import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Delivery = () => {
   return (
      <div>

         <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ДОСТАВКА ТА'} text2={'ОПЛАТА'} />
         </div>

         <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.dev_img} alt='' />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
               <p>1. Крім повної оплати, у нас можливий накладений платіж з мінімальною передплатою 200 грн.</p>
               <p>2. Передплата не повертається. У разі якщо вам підійде товар то в чеку буде сума менша на 200 грн., у разі якщо ви не заберете товар, гроші будуть використані на оплату доставки та повернення посилки.</p>
               <p>3. Вартість доставки згідно тарифів Нової пошти та Укрпошти.</p>
            </div>
         </div>

         <NewsletterBox />

      </div>
   )
}

export default Delivery