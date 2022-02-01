import { Link } from "react-router-dom"

const HomeCard = ({ image, title, text, alt, to}) => {


  return (<div className="beer-box">
      
      <img src={image} alt="Representation of beer"/>
      <Link to={`${to}`}><h1>{title}</h1></Link>
      <p>{text}</p>
      

  </div>)
};

export default HomeCard;
