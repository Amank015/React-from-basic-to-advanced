import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DataFetcher = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>
    {
      fetch("https://dummyjson.com/products")
      .then((res)=>res.json())
       .then((data)=>
    {
       setData(data.products);
       setLoading(false)
        
    })
    },[]);



  return (
    <div>
      {
        loading ? (
         <h1>loading</h1>
        ):(
        <ul>
         {  data.map((product)=>(
            <li key={product.id}>
             {product.title}
             {product.price}
            </li>
            ))
         }   
        </ul>     
        )
      }
    </div>
  )
}

export default DataFetcher
