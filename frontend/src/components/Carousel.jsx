import { useEffect, useState } from 'react';


const images = [
   '/banners/banner1.jpg',
   '/banners/banner2.jpg',
   '/banners/banner3.jpg',
   '/banners/banner4.jpg',
];

const Carousel = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   // Автоматичне переключення кожні 3 секунди
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="relative w-full h-64 sm:h-96 overflow-hidden">
         <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover transition-all duration-700"
         />

         {/* Крапочки */}
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
               <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                     }`}
               />
            ))}
         </div>
      </div>
   );
};

export default Carousel;