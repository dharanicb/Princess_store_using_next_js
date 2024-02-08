"use client"; 
import Description from "@/Components/Description";
import { loaderStart, loaderSuccess } from "@/Store/Reducers/loaderSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Slider = ({ products }) => {
  const dispatch = useDispatch();
  if (!products) {
    dispatch(loaderStart())
  }
  else {
    dispatch(loaderSuccess())
    const { images } = products
    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
      activeImage === images?.length - 1
        ? setActiveImage(0)
        : setActiveImage(activeImage + 1);
    };
    const clickPrev = () => {
      activeImage === 0
        ? setActiveImage(images?.length - 1)
        : setActiveImage(activeImage - 1);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        clickNext();
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }, [activeImage]);
 
    return (
      <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto mt-10 max-w-5xl shadow-2xl rounded-2xl">
        <div
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          {images?.map((elem, idx) => (
            <div
              key={idx}
              className={`${idx === activeImage
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                  : "hidden"
                }`}
            >
              <img
                src={elem}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
          products={products}
        />
      </main>
    );
  }
};

export default Slider;


export async function getStaticPaths() {
  try {
    const res = await fetch('https://dummyjson.com/products')
    const posts = await res.json()

    if (Array.isArray(posts)) {
      const products = posts?.products.map(post => ({ params: { id: post.id.toString() } }))
      return {
        paths: products,
        fallback: false,
      }
    } else {
      // console.error('The fetched data is not an array:', posts)
      console.error('The fetched data is not an array:')
      return {
        paths: [],
        fallback: false,
      };
    }
  } catch (error) {
    console.error('Error fetching data:');
    // console.error('Error fetching data:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try{
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const products = await res.json()
    return { props: { products } }
  }
  catch(error){
    console.log(error);
    return {
      props: {
        products : [],
        categorys : []
      },
      notFound: true,
    };
  }
}