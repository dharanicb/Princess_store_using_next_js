import ItemsBar from '@/Components/ItemsBar'
import ProductItems from '@/Components/ProductItems'
import React from 'react'

export default function  CategoryPaths({products , categorys}) {
  return (
    <ItemsBar products={products} categorys={categorys}/>
  )
}



export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/products')
    const posts = await res.json()
   
    const paths = posts.products.map((post) => ({
      params: { category: post.category },
    }))
    return { paths, fallback: true }
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`https://dummyjson.com/products/category/${params.category}`)
    const products = await res.json()
    const logs = await fetch('https://dummyjson.com/products/categories')
    const categorys =  await logs.json()
    return { props: { products ,categorys } }
  }