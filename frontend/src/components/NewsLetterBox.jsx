import React from 'react'

const NewsLetterBox = () => {

      const onSubmitHandler = (event) => {
         event.preventDefault();
      }

   return (
      <div className='text-center'> 
         <p className='text-2xl font-medium text-gray-800'>Підпишись зараз та отримуй знижку 20%</p>
         <p className='text-gray-400 mt-3'>
            Підпишіться на розсилку та отримуйте новини про останні колекції, знижки та акції Blanco.
         </p>
         <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Підписатись</button>
         </form>
      </div>
   )
}

export default NewsLetterBox