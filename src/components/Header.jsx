import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        background: "#47B5FF",
        height: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <Link to="/">
        <i
          class="fa fa-house"
          style={{ color: "white", fontSize: "1.6rem" }}
        ></i>
      </Link>
    </div>
  );
}

export default Header;
