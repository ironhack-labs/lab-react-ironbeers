import React from 'react';

const MenuCard = (props) => {
  const { title, imgUrl, description } = props;

  return (
    <div className='menu-card'>

      <div className='menu-card_img'>
        <img src={imgUrl} alt={`menu ${title}`} />
      </div>

      <div className='menu-card_details'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

    </div>
  )
}

export default MenuCard;
