import { Link } from "react-router-dom";

const BeersTemplate = ({ img, title, text, link }) => {
  return (
    <Link to={link} className="link">
      <div
        className="template-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      >
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default BeersTemplate;
