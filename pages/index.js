import { loaderStart, loaderSuccess } from "@/Store/Reducers/loaderSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
export default function Home() {
const router = useRouter()
const dispatch = useDispatch()
dispatch(loaderSuccess())

  return (
    <>
   <div className="flex flex-col h-screen justify-center items-center">
      <div className="drop-shadow-2xl flex flex-col justify-center items-center bg-cover bg-white w-[80%] h-[350px]">
          <h1 className="font-bold text-[45px] text-gray-800">Welcome to Princes Store</h1>
          <p className="font-bold text-[13px] text-gray-800">What do you want, Can you check Products Store and add the items</p>
          <button className="bg-[#6c6c9b] hover:bg-[#555590] text-white font-bold py-2 px-4 rounded sm:text-[16px] self-center m-5" onClick={() => {
            router.push('/products')
            dispatch(loaderStart())
            }}>Products Store</button>
      </div>
   </div>
   </>
  );
}
