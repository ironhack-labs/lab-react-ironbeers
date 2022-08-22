import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar-center bg-sky-600">
			<div className="btn btn-ghost normal-case text-xl">
				<Link to={"/"}>
					<p className="text-white">🏠</p>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
