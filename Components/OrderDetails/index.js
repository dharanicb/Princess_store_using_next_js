import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { loaderSuccess } from '@/Store/Reducers/loaderSlice'

const OrderDetails = () => {
  const data = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  dispatch(loaderSuccess())

  const totalData = data && Object.values(data).map(each => {
    const price = Math.ceil(each.price - (each.discountPercentage % 100))
    if (each.quantity) {
      return each.quantity * price
    }
  })

  const sum = totalData.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log("this is userprofile page", data)


  return (
    <div className='drop-shadow-xl h-[60%] overflow-auto  px-3 py-3 rounded-lg bg-white'>
      {data &&
        Object.values(data).map((each, index) => (
          <Product products={each} key={`${index + each.id}`} />
        ))}
      {Object.keys(data).length > 0 ?
        (
          <>
            <p className='font-[300] ml-2 flex justify-between'><strong>Covinence Fee</strong><span className='text-gray-500'>₹ 99</span></p>
            <p className='font-[300] ml-2 flex justify-between'><strong>Shipping </strong><span className='text-green-400'>Free</span></p>
            <p className='text-right font-bold text-[17px] m-5'>Total : {sum && sum + 99}</p>
          </>
        ) : (

          <div className='flex flex-col px-3 py-4 justify-center items-center'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5ODm-uNO0hUqmF5rfWU9ALodZkd2EvBQvA&usqp=CAU' className='m-5' alt="No Products" />
            <p className='font-heading md:text-[28px] text-[14px] text-[#240253] font-semibold m-2 md:pl-0 md:inline hidden'>Sorry, You have not selected any products</p>
          </div>
        )
      }
    </div>
  )
}

export default OrderDetails