import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems, products, clearCart, navigate } = useContext(ShopContext);

  // Стейти форми
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [callPreference, setCallPreference] = useState('');
  const [deliveryType, setDeliveryType] = useState('');

  // Сума
  const calculateTotal = () => {
    const itemsArray = Object.values(cartItems);
    return itemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Надіслати замовлення
  const handleOrder = async () => {
  // 1. Створення масиву товарів
  const orderedItems = [];

  for (const productId in cartItems) {
    const product = products.find(p => p._id === productId);
    if (!product) continue;

    const sizes = cartItems[productId];
    for (const size in sizes) {
      const quantity = sizes[size];
      orderedItems.push({
        name: product.name,
        size,
        quantity,
        price: product.price,
        total: product.price * quantity
      });
    }
  }

  // 2. Загальна сума
  const total = orderedItems.reduce((sum, item) => sum + item.total, 0);

  // 3. Дані замовлення
  const orderData = {
    user: {
      firstName,
      lastName,
      phone,
      email,
      address: `${street}, ${city}, ${region}, ${postalCode}, ${country}`,
      deliveryMethod: deliveryType,
      callPreference
    },
    cartItems: orderedItems,
    total
  };

  // 4. Надсилання на бекенд
  try {
    const res = await fetch('http://blanco_full-stack.up.railway.app/api/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    const result = await res.json();
    clearCart();
    navigate('/orders');
  } catch (err) {
    console.error('Помилка:', err);
    alert('Не вдалося надіслати замовлення');
  }
};

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-top'>
      {/* Ліва частина */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'АДРЕСА'} text2={'ДОСТАВКИ'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Ім`я' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Прізвище' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Контактний номер' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Електронна адреса' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Вулиця, номер будинку' value={street} onChange={(e) => setStreet(e.target.value)} />

        {/* Служба доставки */}
        <div className='flex gap-3'>
          <button type='button' onClick={() => setDeliveryType('novaposhta')} className={`border px-8 py-2 rounded ${deliveryType === 'novaposhta' ? 'bg-gray-200' : 'bg-white'}`}>
            <img className='h-10 mx-1' src={assets.novaposhta} alt='' />
          </button>
          <button type='button' onClick={() => setDeliveryType('ukrposhta')} className={`border px-2 py-2 rounded ${deliveryType === 'ukrposhta' ? 'bg-gray-200' : 'bg-white'}`}>
            <img className='h-10 mx-1' src={assets.ukrposhta} alt='' />
          </button>
        </div>

        {deliveryType === 'ukrposhta' && (
          <>
            <p className='text-sm text-gray-500'>* Укрпошта — відправлення 2 рази на тиждень.</p>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Поштовий індекс' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Село / місто' value={city} onChange={(e) => setCity(e.target.value)} />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Район' value={region} onChange={(e) => setRegion(e.target.value)} />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Країна' value={country} onChange={(e) => setCountry(e.target.value)} />
          </>
        )}

        {deliveryType === 'novaposhta' && (
          <>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Село / місто' value={city} onChange={(e) => setCity(e.target.value)} />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Номер відділення / поштомату' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Область' value={region} onChange={(e) => setRegion(e.target.value)} />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Країна' value={country} onChange={(e) => setCountry(e.target.value)} />
          </>
        )}

        {/* Зателефонувати? */}
        <div className='flex flex-col gap-1 text-sm'>
          <label>
            <input type='radio' name='call' value='Зателефонувати мені' checked={callPreference === 'Зателефонувати мені'} onChange={(e) => setCallPreference(e.target.value)} className='mr-2 accent-black' />
            Обов'язково зателефонувати перед відправкою
          </label>
          <label>
            <input type='radio' name='call' value='Не потрібно' checked={callPreference === 'Не потрібно'} onChange={(e) => setCallPreference(e.target.value)} className='mr-2 accent-black' />
            Не потрібно телефонувати, відправляйте одразу
          </label>
        </div>
      </div>

      {/* Права частина */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'СПОСІБ'} text2={'ОПЛАТИ'} />
          <div className='text-base text-gray-500 mb-3'>
            Замовлення буде відправлено після повної оплати за вказаними реквізитами.
            Реквізити для оплати вашого замовлення з’являться на екрані після того, як натиснете кнопку ЗАМОВИТИ.
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={handleOrder} className='bg-black text-white px-16 py-3 text-sm'>ЗАМОВИТИ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
