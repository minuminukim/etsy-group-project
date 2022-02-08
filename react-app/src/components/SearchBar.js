import { useDispatch } from 'react-redux';
import "./NavBar.css";
import { searchAllProducts } from '../store/search';
import React, { useState } from 'react';

const SearchBar = () => {

    return (
        <form action="/search" method="get">
        <input id="search-field"
            type="text"
            placeholder="Search for anything"
            name="q"
        />
        <button type="submit">S</button>
    </form>
    )
}

export default SearchBar;