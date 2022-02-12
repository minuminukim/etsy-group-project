import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResult.css';
import ProductGrid from '../ProductGrid';

const SearchResult = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get("q");
    const [products, setProducts] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
    async function fetchData() {
      const query = new URLSearchParams(search).get('q')
      const response = await fetch(`/api/search/${query}`);
      const responseData = await response.json();
      setProducts(responseData.products);
      }
      fetchData();
    }, [query]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setisLoaded(true)
      }, 100);
      return () => clearTimeout(timer);
    });

    // const productComponents = products.map((product) => {
    //     return (
    //       // <li key={product.id}>
    //       //   <NavLink to={`/products/${product.id}`}>{product.images[0]}</NavLink>
    //       // </li>
    //       <div className="search-grid-container">
    //         <ProductGrid products={products} />
    //       </div>
    //     );
    //   });

    const productNotFound = <div className="search-not-found">
      <div className="search-content">
        <h2>We couldn't find any results for {query}</h2>
        <p>Try searching for something else instead?</p>
      </div>
      <div className="funky-shape"></div>
      </div>

    const loadPage = 
    <> {(products.length>=1) ? 
      <div className="search-page"> 
        <p className="results-text">Showing results for <strong>{query}</strong></p>
        <ProductGrid products={products}/>
      </div> : 
      productNotFound}
    </>

    const isLoading = 
    <div className="isLoading"></div>


    // return (
    //     <div>
    //         {(products.length>=1) ? <div>
    //             <p>Showing results for {query}</p>{productComponents}</div> : productNotFound}
    //     </div>
    // )

    return (
      <>
      {isLoaded ? loadPage : isLoading}
      </>
    )
}

export default SearchResult;