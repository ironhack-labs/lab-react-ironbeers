import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-navigation">
      <Link to={"/"}>
        <i className="fa-solid fa-house fa-2xl"></i>
      </Link>
    </div>
  );
}
