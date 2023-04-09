import { Outlet, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

function Layout() {
  return (
    <>
      <div className="text-center  bg-sky-500 flex justify-around ">
        <Link
          to="/"
          className=" text-4xl font-bold hover:bg-gray-400 rounded-full mt-2 p-2"
        >
          <AiOutlineHome></AiOutlineHome> Iron Beers
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
