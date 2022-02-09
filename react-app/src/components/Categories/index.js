import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const CategoryView = () => {

    const [products, setProducts] = useState([]);
    const { category }  = useParams();

    useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/category/${category}`);
      const responseData = await response.json();
      setProducts(responseData.products);
      }
      fetchData();
    }, []);

    const productComponents = products.map((product) => {
        return (
          <li key={product.id}>
            <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
          </li>
        );
      });

    return (
        <div>
            <p>Showing products in {category}</p>
            <div>{productComponents}</div>
       </div>
    )
}


export default CategoryView;