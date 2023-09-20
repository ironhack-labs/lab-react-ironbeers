import { Link } from "react-router-dom";

function HomeCard({ image, title, children, link }) {
  return (
    <Link
      to={link}
      className="home-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
      <p>{children}</p>
    </Link>
  );
}

export default HomeCard;
