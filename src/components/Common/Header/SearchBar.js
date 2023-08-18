const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" name="search" id="searchkey" placeholder="Search..." onChange={props.handleSearch} />
        <button type="submit">
          <i className="la la-search"></i>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
