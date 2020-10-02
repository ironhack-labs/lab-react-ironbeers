import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SectionCard.css';

const SectionCard = (props) => (
  <Link to={props.link}>
    <article className="SectionCard">
      <img src={props.image} className="SectionCard__image"></img>
      <div className="SectionCard__content">
        <h2 className="SectionCard__title">{props.title}</h2>
        <p className="SectionCard__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </article>
  </Link>
);

export default SectionCard;
