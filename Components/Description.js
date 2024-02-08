import React from "react";
// import { motion } from "framer-motion";
import { RigthArrowButton } from "./Icons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addItem } from "@/Store/Reducers/productSlice";
import { loaderStart } from "@/Store/Reducers/loaderSlice";


const Description = ({ activeImage, clickNext, clickPrev , products }) => {
 const {images} = products
 const router = useRouter();
 const dispatch = useDispatch();

const handleOrder = () => {
  router.push(`/cart`)
dispatch(addItem({products}))
dispatch(loaderStart())
} 


  return (
    <div className="grid place-items-start w-full bg-[#e0e0f2] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        {products.brand}
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{products.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {" "}
              {products.description}
            </div>
          </div>

          <button className="bg-[#6c6c9b] text-white uppercase px-4 py-2 rounded-md my-10" onClick={handleOrder}>
            order now
          </button>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <button
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
             <RigthArrowButton className={"-rotate-180 text-black"} />
            </button>

            <button
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <RigthArrowButton className={"text-black"}/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;