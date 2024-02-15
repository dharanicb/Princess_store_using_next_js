import CartItems from '@/Components/CartItems.js'
import { loaderStart, loaderSuccess } from '@/Store/Reducers/loaderSlice'
import { emptyCart } from '@/Store/Reducers/productSlice'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const data = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const router = useRouter();

dispatch(loaderSuccess())

  const handleOrder = () => {
   router.push("/user/profile")
  //  dispatch(emptyCart())
   dispatch(loaderStart())
  }


  const totalData = data && Object.values(data).map(each => {
    const price = Math.ceil(each.price - (each.discountPercentage % 100))
    if (each.quantity) {
      return each.quantity * price
    }
  })

  const sum = totalData.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


  return (
    <div className='h-screen overflow-y-auto flex justify-center Cart'>
      <div className='text-gray-900'>
        <h1 className='m-5 font-bold text-[30px]'>Cart Items</h1>
        <ul className='flex flex-col justify-center'>
          {data && Object.values(data).map((each, index) => (
            <CartItems products={each} key={`${index + each.id}`} />
          ))}
        </ul>
        <div className='text-right self-end m-5'>
          {Object.keys(data).length > 0 && <div className='flex justify-end'>
            <h1 className='self-center mr-6 text-[18px]'><strong>Total Price : {sum && sum}</strong></h1>
            <button className="bg-[#6c6c9b] w-[160px] text-white uppercase px-4 py-2 rounded-md my-10" onClick={handleOrder}>
              Place Order
            </button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Cart