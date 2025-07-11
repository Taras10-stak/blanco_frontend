import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, cartItems, currency } = useContext(ShopContext);

  const selectedItems = Object.keys(cartItems).flatMap((productId) => {
    const product = products.find((p) => p._id === productId);
    if (!product) return [];
    return Object.keys(cartItems[productId]).map((size) => ({
      ...product,
      quantity: cartItems[productId][size],
      size,
    }));
  });

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'МОЇ'} text2={'ЗАМОВЛЕННЯ'} />
      </div>

      <div>
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt='' />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{item.price} {currency}</p>
                  <p>Кількість: {item.quantity}</p>
                  <p>Розмір: {item.size}</p>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Очікує відправлення</p>
              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Очікує схвалення</button>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10 text-center text-gray-700'>
        <div className='mt-8 p-4 bg-gray-100 rounded text-sm sm:text-base'>
          <p className='mb-2 font-semibold'>💳 Реквізити для оплати:</p>
          <p><span className='font-medium'>Одержувач:</span> ФОП Малютяк Павло Миколайович</p>
          <p><span className='font-medium'>IBAN:</span> <span className='select-all'>UA963220010000026007350106919</span></p>
          <p><span className='font-medium'>ЄДРПОУ:</span> 2563704596</p>
          <p className='mt-2'><span className='font-medium'>Призначення платежу:</span> Згідно з актом виконаних робіт, інвойсом або контрактом.</p>
        </div>

        <p className='text-center mt-10 text-xl font-semibold text-green-600'>✅ Дякуємо за ваше замовлення!</p>
      </div>
    </div>
  );
};

export default Orders;