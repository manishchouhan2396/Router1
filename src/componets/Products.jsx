import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      let r = await fetch("http://localhost:8080/phone");
      let d = await r.json();
      setProduct(d);
      // console.log(d);
    };
    fetchdata();
  }, [])

  // console.log(products, "manish")

  return (
    <div>
      Product:{" "}

      <div>
        {products.map((p) => ( 
          <div>
            {console.log(p.id , "m")}
            <Link to={`/products/${p.id}`}>
              {p.name}
            </Link>
          </div>
        ))}




      </div>

    </div>
  )
}

export default Products
