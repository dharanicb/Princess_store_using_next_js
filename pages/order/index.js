import { loaderSuccess } from '@/Store/Reducers/loaderSlice';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux';

const OrderPlaced = () => {
  const router = useRouter();
  const dispatch = useDispatch();
dispatch(loaderSuccess())

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <img
        src="https://res.cloudinary.com/dkwefqjnn/image/upload/v1660802118/Vector_ibjrdd.png"
        alt="success"
        className="h-[38px] w-[38px] md:h-[63px] md:w-[63px]"
      />
      <h1 className="font-[normal] font-[500] text-center text-[#64748b] text-[24px] line-h-[24px]">Payment Successful</h1>
      <p className="font-[normal] font-[400] text-center text-[#64748b] text-[14px] line-h-[24px]">
        Thank you for ordering Your payment is successfully completed.
      </p>
      <Link href="/" className="decoration-none">
        <button
          type="button"
          className="bg-[#6c6c9b] w-[260px] text-white uppercase px-4 py-2 rounded-md my-10"
        onClick={()=> router.push("/")}
        >
          Go To Home Page
        </button>
      </Link>
    </div>
  )
}

export default OrderPlaced