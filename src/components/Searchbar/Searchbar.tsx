import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className="search-container">
      <form action="/">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <SearchIcon></SearchIcon>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
