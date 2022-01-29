import { Link } from 'react-router-dom';

const OptionLink = ({ title, path, image, description }) => {
  return (
    <Link to={path}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>

          <div className="content">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default OptionLink;
