import ItemsBar from '@/Components/ItemsBar';
import { loaderStart, loaderSuccess } from '@/Store/Reducers/loaderSlice';
import { useDispatch } from 'react-redux';

export default function Products({ products, categorys }) {
  const dispatch = useDispatch()

  if(!products && !categorys){
    dispatch(loaderStart())
  }
  else{
    dispatch(loaderSuccess())
    return (
      <ItemsBar products={products} categorys={categorys}/>
    )
  }
}


export async function getStaticProps() {
  try{
    const res = await fetch(`https://dummyjson.com/products`)
    const products = await res.json()
    const logs = await fetch('https://dummyjson.com/products/categories')
    const categorys = await logs.json()

    return {
      props: {
        products,
        categorys
      },
    }
  }
  catch(error){
    console.log("data not fetching",error);
    return {
      props: {
        products : [],
        categorys : []
      },
      notFound: true,
    };
  }
}

