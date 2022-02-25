import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="container-fluid card">
      <img src={props.image} alt={props.title}></img>
      <Link to={props.url}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
