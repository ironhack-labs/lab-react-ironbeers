import React from 'react';

const HomeBeerCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt={props.title} style={{ width: 300 }} />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
        veniam, a fugit iusto exercitationem pariatur possimus cumque
        perferendis quam hic sed sint earum dicta illo laborum minus molestiae
        adipisci fugiat!
      </p>
    </div>
  );
};

export default HomeBeerCard;
