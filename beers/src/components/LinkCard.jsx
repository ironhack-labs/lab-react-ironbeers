import React from "react";
import { Link } from "react-router-dom";
import { Div } from "../lib/styledcomps";

export const LinkCard = ({ children, img, link }) => {
  return (
    <Div img={img}>
      <Link to={`/${link}`}>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{children}</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </Link>
    </Div>
  );
};
{
  /* <div>
          <img src={img} alt={children} />
          <p>{children}</p>
        </div> */
}
