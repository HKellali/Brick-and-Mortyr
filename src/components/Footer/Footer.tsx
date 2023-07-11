import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <p>
            All of the data is brought to you by&nbsp;
            <Link to="http://rickandmortyapi.com">The Rick and Morty API</Link>
          </p>
        </div>
        <div className="right">
          <p>
            Follow my github for more information&nbsp;
            <Link to="http://github.com/HKellali?tab=repositories">
              <GitHubIcon />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
