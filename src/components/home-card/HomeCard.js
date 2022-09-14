import "./HomeCard.css";
import { Link } from "react-router-dom";

function HomeCard({ title, pic, path }) {
  return (
    <Link to={path} className="text-decoration-none text-dark"> 
    <div className="card my-2">
      <img className="card-img" src={pic} alt={title} />
      <div className="card-body">
        <h2 >{title}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    </Link>
  );
}

export default HomeCard;
