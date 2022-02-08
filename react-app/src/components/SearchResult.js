import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SearchResult = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get("q");
    const [products, setProducts] = useState([]);

    useEffect(() => {
    async function fetchData() {
      const query = new URLSearchParams(search).get('q')
      console.log(query)
      const response = await fetch(`/api/search/${query}`);
      const responseData = await response.json();
      setProducts(responseData.products);
      }
      fetchData();
    }, [query]);

    // const productComponents = products.map((product) => {
    //     if (product.title.toLowerCase().includes(query.toLowerCase())) {
    //         return (
    //             <li key={product.id}>
    //                 <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
    //             </li>
    //         )};
    // });

    const productComponents = products.map((product) => {
        return (
          <li key={product.id}>
            <NavLink to={`/users/${product.id}`}>{product.title}</NavLink>
          </li>
        );
      });

    return (
        <div>
            <div>{productComponents}</div>
       </div>
    )
}


export default SearchResult;