import ItemsBar from '@/Components/ItemsBar'
import { loaderStart, loaderSuccess } from '@/Store/Reducers/loaderSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function  CategoryPaths({products , categorys}) {
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



// export async function getStaticPaths() {
//     const res = await fetch('https://dummyjson.com/products')
//     const posts = await res.json()
   
//     const paths = posts.products.map((post) => ({
//       params: { category: post.category },
//     }))
//     return { paths, fallback: true }
//   }


  export async function getStaticPaths() {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const posts = await res.json()
  
      if (Array.isArray(posts)) {
        const products = posts?.products.map(post => ({ params: { category: post.category.toString() } }))
        console.log('The fetched data :')
        return {
          paths: products,
          fallback: true,
        }
      } else {
        console.error('The fetched data is not an array:')
        // console.error('The fetched data is not an array:', posts)
        return {
          paths: [],
          fallback: false,
        };
      }
    } catch (error) {
      // console.error('Error fetching data:', error);
      console.error('Error fetching data:');
      
      return {
        paths: [],
        fallback: false,
      };
    }
  }



  export async function getStaticProps({ params }) {
    try{
      const res = await fetch(`https://dummyjson.com/products/category/${params.category}`)
      const products = await res.json()
      const logs = await fetch('https://dummyjson.com/products/categories')
      const categorys =  await logs.json()
      return { props: { products ,categorys } }
    }
    catch(error){
      console.log(error);
      return {
        props: {
          products : [],
          categorys : []
        },
      };
    }
  }