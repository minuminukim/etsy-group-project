import "./NavBar.css";

const SearchBar = () => {

    return (
        <form action="/search" method="get">
        <input id="search-field"
            type="text"
            id="header-search"
            placeholder="Search for anything"
            name="q"
        />
        <button type="submit">S</button>
    </form>
    )
}

export default SearchBar;