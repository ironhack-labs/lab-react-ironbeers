import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header
        style={{
          textAlign: "center",
          width: 720,
          height: 40,
          margin: "auto",
          backgroundColor: "blue",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
          Home
        </Link>
      </header>
      <main>
        <div className="page-container" style={{ width: 720, margin: "auto" }}>
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
}
