import { Link } from "react-router-dom";

import Searchbar from "../Searchbar/Searchbar";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-nav">
      <div className="wrapper">
        <div className="up">
          <div className="left">
            <Link to="/">B&M</Link>
          </div>
          <div className="right">
            <Searchbar></Searchbar>
          </div>
        </div>
        <div className="down">
          <h1>Welcome to Brick & Mortyr</h1>
          <hr />
          <h2>All your favorite Rick & Morty characters</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
