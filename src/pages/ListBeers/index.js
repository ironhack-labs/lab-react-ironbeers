import React from "react";

const ListBeers = ({ beersData, ...props }) => {
  console.log("HOO", beersData);

  return (
    <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      {beersData.map((beer) => {
        return (
          <div>
            <img src={beer.image_url} alt="" />
            <h3 class="uk-card-title">{beer.name}</h3>
            <h4>{beer.description}</h4>
            <p>
              <strong>Created by: </strong>
              {beer.contributed_by}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ListBeers;
