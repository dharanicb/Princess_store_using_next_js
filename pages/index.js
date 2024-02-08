import ErrorPopup from "@/Components/ErrorPopUp";
import Loader from "@/Components/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
const router = useRouter()

const errorMessage = useSelector((state) => state.loader.errorMessage);
const loader = useSelector((state) => state.loader.isLoading);

  return (
    <>
    {errorMessage && <ErrorPopup isOpen={true} errorMessage={errorMessage} />}
      {/* {errorMessage && <ErrorPop isOpen={true} errorMessage={errorMessage} />} */}

      {loader && <Loader />}
   <div className="flex flex-col h-screen justify-center items-center">
      <div className="drop-shadow-2xl flex flex-col justify-center items-center bg-cover bg-white w-[80%] h-[350px]">
          <h1 className="font-bold text-[45px] text-gray-800">Welcome to Princes Store</h1>
          <p className="font-bold text-[13px] text-gray-800">What do you want, Can you check Products Store and add the items</p>
          <button className="bg-[#6c6c9b] hover:bg-[#555590] text-white font-bold py-2 px-4 rounded sm:text-[16px] self-center m-5" onClick={() => router.push('/products')}>Products Store</button>
      </div>
   </div>
   </>
  );
}
