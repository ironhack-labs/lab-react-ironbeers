import React from 'react';

const TrIngredients = (props) => {
  const ingredient = props.ingredient;

  return ingredient?.map((ing) => {
    <tr>
      <td>{ing.name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>;
  });
};

export default TrIngredients;
