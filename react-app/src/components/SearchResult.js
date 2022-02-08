import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SearchResult = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get("q");
    const [products, setProducts] = useState([]);

    useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/products/');
      const responseData = await response.json();
      setProducts(responseData.products);
      }
      fetchData();
    }, []);

    console.log(products)


    const productComponents = products.map((product) => {
        if (product.title.toLowerCase().includes(query.toLowerCase())) {
            return (
                <li key={product.id}>
                    <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
                </li>
            )};
    });

    return (
        <div>
            <div>{productComponents}</div>
       </div>
    )
}


export default SearchResult;