import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate, useFetcher, Form } from "react-router-dom";

const Searchbar = () => {
  let navigate = useNavigate();
  const onClick = (e) => {
    const adress = searchInput ? "/?page=1&name=" + searchInput : "/?page=1";
    e.preventDefault();
    navigate(adress);
  };
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { target } = e;
    setSearchInput((target as HTMLButtonElement).value);
  };
  return (
    <div className="search-container">
      <Form method="get" action="/">
        <div className="tb"></div>
        <input
          type="text"
          name="name"
          placeholder="Search character by name"
          onChange={handleChange}
        />
        <button type="submit" onClick={onClick}>
          <SearchIcon></SearchIcon>
        </button>
      </Form>
    </div>
  );
};

export default Searchbar;
