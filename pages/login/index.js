"use client";
import ErrorPopup from "@/Components/ErrorPopUp";
import { isValidToken } from "@/Components/utils";
import { authFail, authSuccess } from "@/Store/Reducers/authSlice";
import { error } from "@/Store/Reducers/loaderSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Login() {
  const errorMessage = useSelector((state) => state.loader.errorMessage);
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    // console.log("gyyguhg")
    window.googleSSOSuccess = function (e) {
      const token = e.credential;
// console.log("kugyftdrfghgh",e.credential)
      if (!token) {
      } else {
        localStorage.setItem("tokenKey", JSON.stringify(token));
        const validateToken = isValidToken(token);
        if (validateToken.data) {
          dispatch(authSuccess());
          router.push("/")
        } else {
          dispatch(error(validateToken.error));
          dispatch(authFail());
        }
      }
    };
    loadScript("https://accounts.google.com/gsi/client");
  }, [dispatch]);

  const loadScript = (url) => {
    const myScript = document.createElement("script");
    myScript.src = url;
    document.body.appendChild(myScript);
  };

  return (
    <>
      {errorMessage && <ErrorPopup isOpen={true} errorMessage={errorMessage} />}
      <div
        style={{ backgroundColor: "rgba(245, 242, 235, 1)" }}
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              width="184"
              alt="logo"
              src="https://i.pinimg.com/736x/3a/ef/ac/3aefac9c181eb44137cd95403b317e66.jpg"
            />
            <div className="mt-4">
              <GoogleSSOButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GoogleSSOButton() {
  const clientId =
    "145819553278-quf38k7elp90jmps0lpo3mrke9bcq9an.apps.googleusercontent.com";

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={clientId}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="googleSSOSuccess"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
}

export default Login;
