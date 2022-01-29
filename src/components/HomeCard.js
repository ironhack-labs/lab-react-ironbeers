import { Link } from "react-router-dom"

const HomeCard = ({ image, title, text, alt, to}) => {


  return (<div className="beer-box">
      <Link to={`${to}`}>
      <img src={image} alt="Representation of beer"/>
      <h1>{title}</h1>
      <p>{text}</p>
      </Link>

  </div>)
};

export default HomeCard;
