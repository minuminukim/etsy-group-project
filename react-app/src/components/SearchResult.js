import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SearchResult = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get("q");
    const [products, setProducts] = useState([]);

    useEffect(() => {
    async function fetchData() {
      const query = new URLSearchParams(search).get('q')
      const response = await fetch(`/api/search/${query}`);
      const responseData = await response.json();
      setProducts(responseData.products);
      }
      fetchData();
    }, [query]);

    const productComponents = products.map((product) => {
        return (
          <li key={product.id}>
            <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
          </li>
        );
      });

    const productNotFound = <div><h2>We couldn't find any results for {query}</h2><p>Try searching for something else instead?</p></div>


    return (
        <div>
            {(products.length>=1) ? productComponents : productNotFound}
        </div>
    )
}


export default SearchResult;