import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" container-md flex flex-col items-center mt-14 space-y-10">
      <div>
        <Link
          to="/beers"
          className="border-black border-2 p-3 hover:bg-gray-500"
        >
          All Beers
        </Link>
      </div>
      <div>
        <Link
          to="/beers/random-beer"
          className="border-black border-2 p-3 hover:bg-gray-500"
        >
          Random Beer
        </Link>
      </div>
      <div>
        <Link
          to="/beers/create"
          className="border-black border-2 p-3 hover:bg-gray-500"
        >
          New Beer
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
