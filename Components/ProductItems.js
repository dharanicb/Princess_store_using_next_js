import React from 'react'
import StarIcon from './Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addItem } from '@/Store/Reducers/productSlice'
import { loaderStart } from '@/Store/Reducers/loaderSlice'

const ProductItems = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCart = () => {
    router.push(`/cart`)
    dispatch(addItem({products}))
    dispatch(loaderStart())
  }


  return (
    <li className='drop-shadow-xl bg-white w-[35%] text-gray-800 m-5 px-5 py-5 rounded-md'>
      <Link href={`/products/${products.id}`}>
        <div className='flex justify-center'>
          <img src={products.thumbnail} className='w-[300px] rounded' />
        </div>
        <div className='m-5'>
          <p className='text-center font-bold m-3'>{products.title}</p>
          <div className='flex justify-between'>
            <p className=' text-center font-bold m-3 '><strong>Price :</strong> ₹ {Math.ceil(products.price - (products.discountPercentage % 100))} /-</p>
            <p className=' text-center text-gray-500 line-through m-3'><strong>MRP :</strong> {products.price} /-</p>
          </div>
          <p className='text-[12px] mb-1'><strong className='text-[14px]'>Stock :</strong> {products.stock}</p>
          <p className='text-[12px] mb-1'><strong className='text-[14px]'>About :</strong> {products.description}</p>
          <div className='flex'>
            <p className='text-[12px] mb-1'><strong className='text-[14px]'>Rating :</strong> {products.rating}</p>
            <StarIcon className={"mx-1 text-[#f3df61] my-1"} />
          </div>
          <p className='text-[15px] font-extrabold text-[#6c6c9b] mb-1'><strong className='text-[15px] font-bold text-gray-900'>Discount :</strong> {Math.ceil(products.discountPercentage)} %</p>
        </div>
      </Link>
      <div className='text-right'>
        <button className="bg-[#6c6c9b] text-white uppercase px-4 py-2 rounded-md my-10" onClick={handleCart}>
          Add Cart
        </button>
      </div>
    </li>
  )
}

export default ProductItems