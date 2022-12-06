import { Link } from "react-router-dom";
import { ReactComponent as HomeIco } from "../assets/home.svg";
import { ReactComponent as SearchIco } from "../assets/search.svg";

const Header = ({ query, handleSearchInput, showSearchBar }) => {
  return (
    <div className="Header">
      <Link to="/">
        <HomeIco stroke="black" className="icon" />
      </Link>
      {showSearchBar && (
        <div>
          <label htmlFor="input-search-query"></label>
          <input type="text" id="input-search-query" placeholder="Search all beers..." value={query} onChange={handleSearchInput} />
          <SearchIco className="search-icon" />
        </div>
      )}
    </div>
  );
};

export default Header;
