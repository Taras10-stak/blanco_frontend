import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }
  
  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch]) 

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>ФІЛЬТРИ
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>
         {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>КАТЕГОРІЯ</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'hoodie'} onChange={toggleCategory} /> Худі
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'hoodie-flis'} onChange={toggleCategory} /> Худі на флісі
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'t-shirt'} onChange={toggleCategory} /> Футболка базова
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'t-shirt-patriot'} onChange={toggleCategory} /> Футболка патріотична
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'sweatshirt'} onChange={toggleCategory} /> Світшот
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'sweatshirt-flis'} onChange={toggleCategory} /> Світшот на флісі
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'joggers'} onChange={toggleCategory} /> Джогери
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'joggers-flis'} onChange={toggleCategory} /> Джогери на флісі
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'suit-flis'} onChange={toggleCategory} /> Костюм флісовий
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'suit-hoodie'} onChange={toggleCategory} /> Костюм з худі НОВИНКА
              </p>
              
            </div>
          </div>
          {/* SubCategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>КОЛІР</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'black'} onChange={toggleSubCategory} /> Чорний
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'electrician'} onChange={toggleSubCategory} /> Електрик
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'brown'} onChange={toggleSubCategory} /> Коричневий
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'gray'} onChange={toggleSubCategory} /> Сірий
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'beige'} onChange={toggleSubCategory} /> Бежевий
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'gray-melange'} onChange={toggleSubCategory} /> Сірий меланж
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'milky'} onChange={toggleSubCategory} /> Молочний
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'dark-blue'} onChange={toggleSubCategory} /> Темно синій
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'powdery'} onChange={toggleSubCategory} /> Пудровий
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'fuchsia'} onChange={toggleSubCategory} /> Фуксія
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'green'} onChange={toggleSubCategory} /> Зелений
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'graphitic'} onChange={toggleSubCategory} /> Графітовий
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'pink'} onChange={toggleSubCategory} /> Рожевий
              </p>
            </div>
          </div>
      </div>

    {/* Right Side */}
    <div className='flex-1'>

      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'} />
        {/* Product Sort */}
        <select onChange={(e)=>setSortType(e.target.value)} className='max-w-[200px] w-full border rounded border-gray-300 text-sm px-3 py-2'>
          <option value="relavent">Вартість: Оптимальна</option>
          <option value="low-high">Вартість: Від меншої до більшої</option>
          <option value="high-low">Вартість: Від більшої до меншої</option>
        </select>
      </div>
      
      {/* Map Products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} oldprice={item.oldprice} image={item.image} />
          ))
        }
      </div>

    </div>

    </div>
  )
}

export default Collection