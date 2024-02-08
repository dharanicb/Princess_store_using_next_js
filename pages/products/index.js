import ItemsBar from '@/Components/ItemsBar';
import { loaderSuccess } from '@/Store/Reducers/loaderSlice';
import { useDispatch } from 'react-redux';

export default function Products({ products, categorys }) {

  return (
    <ItemsBar products={products} categorys={categorys} />
  )
}


export async function getStaticProps() {
  // try {
    // const dispatch = useDispatch();
    const res = await fetch(`https://dummyjson.com/products`)
    const products = await res.json()
    const logs = await fetch('https://dummyjson.com/products/categories')
    const categorys = await logs.json()
    // dispatch(loaderSuccess())

    return {
      props: {
        products,
        categorys
      },
    }
  // }

//   catch (error) {
//     // Handle the error
//     console.log(error);

//     return {
//       props: {},
//     };

//   }
}

