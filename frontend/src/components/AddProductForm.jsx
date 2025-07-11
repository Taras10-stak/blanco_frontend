import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
   const [productData, setProductData] = useState({
      name: '',
      description: '',
      price: '',
      category: '',
      subCategory: '',
      sizes: [],
      bestseller: false,
      images: [],
   });

   // Обробник зміни значень у формі
   const handleChange = (e) => {
      const { name, value } = e.target;
      setProductData({ ...productData, [name]: value });
   };

   // Обробник зміни файлів
   const handleFileChange = (e) => {
      setProductData({ ...productData, images: e.target.files });
   };

   // Обробник відправки форми
   const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
      formData.append('subCategory', productData.subCategory);
      formData.append('bestseller', productData.bestseller);

      // Додаємо файли
      Array.from(productData.images).forEach((image, index) => {
         formData.append(`image${index + 1}`, image);
      });

      try {
         const response = await axios.post('blanco_full-stack.up.railway.app/api/products/add', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });
         console.log(response.data);
         alert('Product added successfully!');
      } catch (error) {
         console.error('Error adding product:', error);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleChange}
         />
         <textarea
            name="description"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleChange}
         />
         <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
         />
         <input
            type="text"
            name="category"
            placeholder="Category"
            value={productData.category}
            onChange={handleChange}
         />
         <input
            type="text"
            name="subCategory"
            placeholder="SubCategory"
            value={productData.subCategory}
            onChange={handleChange}
         />
         <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
         />
         <button type="submit">Add Product</button>
      </form>
   );
};

export default AddProductForm;
