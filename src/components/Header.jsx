import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        background: "#47B5FF",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <Link to="/">
        <i
          class="fa fa-house"
          style={{ color: "white", fontSize: "1.5rem" }}
        ></i>
      </Link>
    </div>
  );
}

export default Header;
