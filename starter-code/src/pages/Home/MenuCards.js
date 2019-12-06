import React from 'react';
import { Link } from "react-router-dom";
import { MenuCards } from '../../styles/components';

function MenuCardsComp (props) {
  return (
    <MenuCards>
      <Link to={props.route}>
        <img src={props.image}/>
        <article>
          <h3>{props.name}</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </article>
      </Link>
    </MenuCards>
  )
}

export default MenuCardsComp;