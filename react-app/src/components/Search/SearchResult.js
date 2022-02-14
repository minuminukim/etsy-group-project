import React, { useEffect, useState } from 'react';
import './SearchResult.css';
import ProductGrid from '../ProductGrid';
import { AiFillCaretDown } from "react-icons/ai";

const SearchResult = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get("q");
    const [products, setProducts] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [descending, setDescending] = useState(false);
    const [ascending, setAscending ] = useState(false);
    const [topRated, setTopRated] = useState(false);
    const [relevancy, setRelevancy] = useState(true);
    const [showFilter, setShowFilter] = useState(false);
    const [filterName, setFilterName] = useState(" Relevancy");

    const openFilter = () => {
      if (showFilter) return;
      setShowFilter(true);
    };

    useEffect(() => {
      if (!showFilter) return;

      const closeFilter= () => {
        setShowFilter(false);
      };

      document.addEventListener('click', closeFilter);

      return () => document.removeEventListener('click', closeFilter);
    }, [showFilter]);

    useEffect(() => {
    async function fetchData() {
      const query = new URLSearchParams(search).get('q')
      const response = await fetch(`/api/search/${query}`);
      const responseData = await response.json();
      if (descending) {
        const filteredproducts = responseData.products.sort(function (a, b) {return b.price - a.price});
        setProducts(filteredproducts)
      } else if (ascending) {
        const filteredproducts = responseData.products.sort(function (a, b) {return a.price - b.price});
        setProducts(filteredproducts);
      } else if (topRated) {
        const filteredproducts = responseData.products.sort(function(a,b) {return b.rating - a.rating})
        setProducts(filteredproducts);
      } else if (relevancy) {
        setProducts(responseData.products);
      }
      }
      fetchData();
    }, [query, descending, ascending, relevancy, topRated, search]);


    useEffect(() => {
      const timer = setTimeout(() => {
        setisLoaded(true)
      }, 300);
      return () => clearTimeout(timer);
    });

    const sortByRelevancy = () => {
      setAscending(false)
      setDescending(false)
      setTopRated(false)
      setRelevancy(true);
      setFilterName(" Relevancy");
    }

    const sortByLowestPrice = () => {
      setRelevancy(false);
      setTopRated(false);
      setDescending(false);
      setAscending(true);
      setFilterName(" Lowest Price");
    }

    const sortByHighestPrice = () => {
      setAscending(false)
      setRelevancy(false);
      setTopRated(false);
      setDescending(true);
      setFilterName(" Highest Price");
    }

    const sortByRating = () => {
      setAscending(false)
      setRelevancy(false);
      setDescending(false);
      setTopRated(true);
      setFilterName(" Top Customer Reviews");
    }

    const isLoading =
    <div className="isLoading"></div>

    const productNotFound = <div className="search-not-found">
      <div className="search-content">
        <h2>We couldn't find any results for {query}</h2>
        <p>Try searching for something else instead?</p>
      </div>
      <div className="funky-shape"></div>
      </div>

    const SearchFilterMenu =
      <ul className="search-dropdown">
        <li className="main-filter-item">Sort by: {filterName}<div id="dropdown-icon"><AiFillCaretDown /></div></li>
        <li className="filter-item" onClick={sortByRelevancy}>Relevancy</li>
        <li className="filter-item" onClick={sortByLowestPrice}>Lowest Price</li>
        <li className="filter-item" onClick={sortByHighestPrice}>Highest Price</li>
        <li className="filter-item" onClick={sortByRating}>Top Customer Reviews</li>
      </ul>

    const loadPage =
    <> {(products.length>=1) ?
      <div className="search-page">
        <p className="results-text">Showing results for <strong>{query}</strong></p>
        <button className="filter-button" type="button" onClick={openFilter}>Sort by: <strong>{filterName}</strong></button>
        {showFilter && (SearchFilterMenu)}
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
