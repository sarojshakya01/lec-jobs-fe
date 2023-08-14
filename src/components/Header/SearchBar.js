const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form id="search-form">
        <input type="text" name="search" id="search-filter" placeholder="Search..." onChange={props.handleSearch} />
        <button type="button">
          <i className="la la-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
