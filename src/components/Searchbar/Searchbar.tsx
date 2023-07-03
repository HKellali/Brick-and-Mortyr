import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <div className="search-container">
      <form action={"/?search=" + searchInput}>
        <input
          type="text"
          placeholder="Search character by name"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">
          <SearchIcon></SearchIcon>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
