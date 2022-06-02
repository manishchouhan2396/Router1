import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [product , setProduct] = useState({});
  console.log("manish")
  const {id} = useParams();
  // console.log(id ,"m");

  useEffect(() =>{
    if(id){
      fetch(`http://localhost:8080/phone/${id}`)
      .then((r)=>r.json())
      .then((d) =>setProduct(d))
    }
  },[id])

  console.log(id ,"manish"  , product)
  
  return (
   <div>
     Product :Id: {id} 
     <div>Name :{product.name} </div>
     <div>Price : {product.price} </div>
   </div>
  );
}

export default Product


