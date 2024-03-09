import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePageBox({toLink, title, img, paragraph}) {
  console.log({toLink: toLink, title: title, img: img, p: paragraph});
  return (
    <Link to={toLink} className="info-box">
        <img src={img} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </Link>
  )
}
