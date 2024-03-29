"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { authFail } from '@/Store/Reducers/authSlice'
import { useRouter } from 'next/router';
import { loaderStart, loaderSuccess } from '@/Store/Reducers/loaderSlice';

let userDetails = "";

const Navbar = () => {
    const [toggleProfile, setToggleProfile] = useState(true)
    const router = useRouter();

    useEffect(() => {
        const token = window.localStorage.getItem('tokenKey');
        userDetails = jwtDecode(token ? token : "");
    }, []);

    const { email, name, picture } = userDetails;

    const dispatch = useDispatch();
    const handleGoToWebsite = () => {
        window.open('https://www.snizle.com')
    }

    const handleLogOut = () => {
        localStorage.removeItem("tokenKey");
        dispatch(authFail());
        router.push("/login")
        dispatch(loaderSuccess())
    };

    return (
        <nav className='w-full flex justify-around text-white bg-[#6c6c9b] '>
            <ul className='w-full flex justify-between text-white bg-[#6c6c9b] h-[80px]'>
                <li className='m-2 mr-3 self-center'>
                <Link href={"/"} className='cursur-pointer'><img src='https://i.pinimg.com/736x/3a/ef/ac/3aefac9c181eb44137cd95403b317e66.jpg' className={'w-[80px] m-5 h-[60px] bg-transparent rounded-[100%]'} /></Link>
                </li>
                <li className='m-3 flex self-center'>
                    <Link href="/" className='mr-6' onClick={()=>dispatch(loaderStart())}>Home</Link>
                    <Link href="/about" className='mr-6' onClick={()=>dispatch(loaderStart())}>About Us</Link>
                    <Link href="/products" className='mr-6' onClick={()=>dispatch(loaderStart())}>Products</Link>
                    <Link href="/cart" className='mr-6' onClick={()=>dispatch(loaderStart())}>Cart</Link>
                </li>
                <li className='m-2 mr-3 self-center text-gray-900'>
                    <div className='relative group'>
                        <img src={`${picture}`} alt="profile image" className='w-[37px] h-[37px] rounded-full cursor-pointer' />
                        <div className={`absolute bg-white shadow-lg p-6 rounded-md flex flex-col  invisible group-hover:visible -left-[150px] w-[200px]`}>
                            <span className="text-[20px] font-medium">{name && name}</span>
                            <span className='text-slate-500 text-[11px]'>{email && email}</span>
                            <span className='cursor-pointer py-1' onClick={handleGoToWebsite}>Go to Website</span>
                            <hr />
                            <span onClick={handleLogOut} className='cursor-pointer'>Logout</span>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar