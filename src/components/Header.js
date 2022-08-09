import { Link } from "react-router-dom";

function Header() {
  return (
    <Header>
      <Link to="/">
        {/*<Link to="/">🏠</Link>*/}
        <img
          src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
          alt="Home Icon"
          className="HomeIcon"
        />
      </Link>
    </Header>
  );
}

export default Header;
