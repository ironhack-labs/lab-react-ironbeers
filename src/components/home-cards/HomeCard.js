import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ img, title, url }) {
  return (
    <>
      <Link to={url} className="text-decoration-none">
        <div className="card mb-3 text-dark">
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              obcaecati, sed nobis repellat ea libero a dolorum magni id beatae
              dolor enim, incidunt exercitationem blanditiis neque quam!
              Molestiae, eum neque.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomeCard;
