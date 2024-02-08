import { decrement, increment } from '@/Store/Reducers/productSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const CartItems = ({ products }) => {
    const dispatch = useDispatch()

    return (
        <li className='drop-shadow-xl bg-white flex justify-between w-[90%] m-[10px] mb-[10px] rounded-md text-gray-900 py-4'>
            <div className='flex'>
            <img src={products.thumbnail} alt={products.title} className='w-[20%] m-5' />
                <div className='flex flex-col px-3'>
                    <p className='text-[12px] m-3'>{products.description}</p>
                    <p className='font-bold m-3 '><strong>Price :</strong> ₹ {Math.ceil(products.price - (products.discountPercentage % 100))} /-</p>
                    <p className='font-bold m-3'>Name : {products.title}</p>
                </div>
            </div>
            <div className='text-right flex justify-end self-end mt-10 mx-5'>
                    <button className="bg-[#6c6c9b] text-white uppercase px-4 py-2 rounded-md my-10" onClick={() => dispatch(decrement({id : products.id}))}>
                        -
                    </button>
                    <p className='slef-center mt-11 px-3'>{products.quantity}</p>
                    <button className="bg-[#6c6c9b] text-white uppercase px-4 py-2 rounded-md my-10" onClick={() => dispatch(increment({id : products.id}))}>
                        +
                    </button>
                </div>
        </li>
    )
}

export default CartItems