import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ProductItems from './ProductItems'
import { useDispatch } from 'react-redux'
import { loaderStart, loaderSuccess } from '@/Store/Reducers/loaderSlice'

const ItemsBar = ({products,categorys }) => {
    const [category, setCategory] = useState("")
    const router = useRouter()
    const dispatch = useDispatch();
  
  const handleChange = async(e)=> {
    setCategory(e.target.value)
      router.push(`/products/category/${e.target.value}`)
      dispatch(loaderStart())
  }

  if (products && categorys) {
    dispatch(loaderSuccess());
  }

    return (
        <div className='h-screen'>
            <div className='flex justify-between'>
                <h1 className='text-[40px] text-gray-800 font-bold m-5'> All Products</h1>
                <select value={category} onChange={handleChange} className='w-[20%] h-[60px] m-6 mr-8 placeholder:italic placeholder:text-slate-500 block bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3  focus:outline-none focus:border-red-300 focus:ring-red-300 focus:ring-1 sm:text-sm'>
                    {categorys?.map((each, index) => (
                        <option value={each} key={index}>{each}</option>
                    ))}
                </select>
            </div>
            <ul className=' flex flex-wrap justify-center'>
                {products?.products?.map((each) => (
                    <ProductItems products={each} key={each.id} />
                ))}
            </ul>
        </div>
    )
}

export default ItemsBar