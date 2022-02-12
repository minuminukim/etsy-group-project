import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResult.css';
import ProductGrid from '../ProductGrid';
import searchNotFound from "./404-Search-Not-Found.svg";

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
      }, 300);
      return () => clearTimeout(timer);
    });

    const isLoading = 
    <div className="isLoading"></div>
    
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
        <div className="product-grid-search-page"><ProductGrid products={products}/></div>
      </div> : 
      productNotFound}
    </>

    return (
      <>
      {isLoaded ? loadPage : isLoading}
      </>
    )
}

export default SearchResult;