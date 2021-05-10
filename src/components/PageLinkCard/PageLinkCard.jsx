import React from 'react';
import { Link } from 'react-router-dom';

const PageLinkCard = ({ image, title, children, pageLink }) => {
  return (
    <div>
      <Link to={pageLink} style={{ textDecoration: "none"}} className="flex-row card-link-container">
        <div className="flex-column flex-center">
          <img src={image} alt={title}/>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </Link>
    </div>
  )
}

export default PageLinkCard;
