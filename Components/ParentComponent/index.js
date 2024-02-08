import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authSuccess } from '@/Store/Reducers/authSlice';
import { isValidToken } from '../utils';
import { error, loaderStart, loaderSuccess } from '@/Store/Reducers/loaderSlice';
import ErrorPopup from '../ErrorPopUp';
import Loader from '../Loader';
import Login from '@/pages/login';

const ParentComponent = ({ children }) => {
    const dispatch = useDispatch();
    const checkAuthToken = () => {
      const token = localStorage.getItem("tokenKey");
      if (token) {
        let parseToken = JSON.parse(token);
        const validateToken = isValidToken(parseToken);
        if (validateToken.data) {
          dispatch(authSuccess());
          dispatch(loaderSuccess())
        } else {
          dispatch(error(validateToken.error));
          dispatch(loaderStart())
          // dispatch(logout());
        }
      }
    };

useEffect(()=> {
    checkAuthToken();
},[])

const errorMessage = useSelector((state) => state.loader.errorMessage);
const loader = useSelector((state) => state.loader.isLoading);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
     {errorMessage && <ErrorPopup isOpen={true} errorMessage={errorMessage} />}
      {loader && <Loader />} 
    <div className='h-screen'>   
        <main>{isAuthenticated ? children : <Login />}</main>
    </div>
    </>
  )
}

export default ParentComponent