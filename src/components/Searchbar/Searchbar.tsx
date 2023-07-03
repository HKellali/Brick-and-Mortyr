import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { redirect, useNavigate, useFetcher } from "react-router-dom";

const Searchbar = () => {
  let navigate = useNavigate();
  const onClick = () => {
    const adress = "/?name=" + searchInput;
    fetcher.load(adress);
    navigate(adress);
  };
  const fetcher = useFetcher();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <div className="search-container">
      <fetcher.Form method="get" action="/">
        <input
          type="text"
          name="name"
          placeholder="Search character by name"
          onChange={handleChange}
        />
        <button type="button" onClick={onClick}>
          <SearchIcon></SearchIcon>
        </button>
      </fetcher.Form>
      {/* <fetcher.Form method="get" action="/">
        <input
          type="text"
          placeholder="Search character by name"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit" onClick={onClick}>
          <SearchIcon></SearchIcon>
        </button>
      </fetcher.Form> */}
    </div>
  );
};

export default Searchbar;
