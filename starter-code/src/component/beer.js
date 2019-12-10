import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Beer = ({ name, image, tagline, contributedBy }) => {
  return (
    <Card
      cover={
        <img
          src={image}
          alt={name}
          style={{ height: "300px", width: "auto" }}
        />
      }
    >
      <Meta
        title={name}
        description={`${tagline}, Contributed By ${contributedBy}`}
      />
    </Card>
  );
};

export default Beer;
