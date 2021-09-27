import React from 'react';
import { Link } from 'react-router-dom';

const Section = (props) => {
  return (
    <div className="flexwrapper section">
      <div>
        <Link to={`/${props.linkUrl}`}>
          <img src={props.imgUrl} alt="" />
        </Link>
      </div>
      <div>
        <h4>{props.headline}</h4>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Section;
