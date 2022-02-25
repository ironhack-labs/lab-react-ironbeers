import { Link } from "react-router-dom";
import HomePage from "./HomePage";

export default function NavBar() {
  return (
    <div>
      <Link to="/" element={<HomePage />}>
        Home
      </Link>
    </div>
  );
}
