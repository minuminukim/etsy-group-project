import "../NavBar/NavBar.css";
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai"


const SearchBar = () => {

    return (
        <form action="/search" method="get" id="searchForm">
            <input id="search-field"
                type="text"
                placeholder="Search for anything"
                name="q"
            />
            <button type="submit"><AiOutlineSearch className="searchIcon" /></button>
        </form >
    )
}

export default SearchBar;