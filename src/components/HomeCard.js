import React from "react";

const HomeCard = ({ title, img }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={img} alt={title} />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis nulla aperiam eaque sapiente consectetur neque dolorem quaerat saepe et.
            </p>
        </div>
    );
};

export default HomeCard;
