import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-center items-center bg-blue-700 p-4 text-white gap-80 mb-10">
        <Link to="/">Home</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/add-beer">Add Beer</Link>
      </div>
    </>
  );
}

export default Navbar;
