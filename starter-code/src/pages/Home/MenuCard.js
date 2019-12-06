import React from "react";
import { StyledMenuCard } from "../../styles/components"
import { Link } from "react-router-dom"

function MenuCard (props) {
  return(
    <StyledMenuCard>
      <Link to={props.route}>
          <img src={props.img} alt="beer" />
          <article>
              <h2>{props.name}</h2>
              <p>
              Paps Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia, sodales auctor imperdiet penatibus neque etiam mus vitae a, phasellus purus ridiculus facilisi ut et egestas. Viverra imperdiet nisi iaculis neque est lectus cum, dis velit malesuada tincidunt vestibulum lobortis cras, egestas integer praesent orci diam hac. Proin malesuada a facilisis quisque urna placerat porta fusce, feugiat duis dictumst nascetur justo magnis inceptos ad, leo erat per turpis platea ante cum.
              </p>
          </article>
      </Link>
    </StyledMenuCard>
  )
}

export  default MenuCard;

