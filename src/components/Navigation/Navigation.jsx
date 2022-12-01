import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="navbar p-3 bg-primary">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand text-white mb-0 h1">Home</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
