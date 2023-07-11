import { useState } from "react";
import { useNavigate, useFetcher } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    if (searchInput) {
      const adress = "/?name=" + searchInput;
      fetcher.load(adress);
      navigate(adress);
    }
  };
  const fetcher = useFetcher();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { target } = e;
    setSearchInput((target as HTMLButtonElement).value);
  };
  return (
    <div className="search-container">
      <fetcher.Form method="get" action="/">
        <div className="tb" />
        <input
          type="text"
          name="name"
          placeholder="Search character by name"
          onChange={handleChange}
        />
        <button type="submit" onClick={onClick}>
          <SearchIcon />
        </button>
      </fetcher.Form>
    </div>
  );
};

export default Searchbar;
