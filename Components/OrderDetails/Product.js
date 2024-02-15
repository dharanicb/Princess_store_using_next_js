import React from 'react'

const Product = ({ products, sum }) => {
    return (
        <div className='flex flex-col px-3 py-3 mb-5'>
            <div className='flex'>
                <img src={products.thumbnail} alt={products.title} className='w-[20%] m-5' />
                <div>
                    <p className='font-bold m-3'>Name : {products.title}</p>
                    <p className='m-3'>Extremated delivary coming soon...</p>
                </div>
            </div>
            <h1 className='font-[300] m-3'>Product Details{`(${products?.quantity})`}</h1>
            <p className='font-[300] m-1 flex justify-between'><strong>Total MRP :</strong> <span className='font-sm'>₹ {Math.ceil(products.price - (products.discountPercentage % 100))} /-</span></p>
            <p className='font-[300] m-1 flex justify-between'><strong>Discount on MRP:</strong><span className='text-gray-500'><span>You saved</span><span className='ml-3 line-through'>₹ {products.price - Math.ceil(products.price - (products.discountPercentage % 100))} /-</span> </span></p>
            <p className='font-[300] m-1 flex justify-between'><strong>Pricess Store Credit used</strong><span className='text-green-500'>₹ 0</span></p>
            <hr className='mt-3'/> 
        </div>
    )
}

export default Product