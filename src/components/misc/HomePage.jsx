import React from "react";
import { Link } from "react-router-dom";

export const HomePageLink = ({ img, title, description, url }) => {
    return (
        <div>
            <Link className="text-decoration-none" to={url}>
                <img style={{ maxWidth: "100vw" }} src={img} alt="..." />
                <div className="mx-3 mb-4 mt-1">
                    <h2 className="text-dark">{title}</h2>
                    <p className="text-secondary">{description}</p>
                </div>
            </Link>
        </div>
    );
};