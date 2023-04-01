import React from "react";

export const BeerDetailItem = ({
    image_url,
    name,
    tagline,
    attenuation_level,
    first_brewed,
    contributed_by,
    description,
}) => {
    return (
        <div className="m-3">
            <div style={{ textAlign: "center" }}>
                <img
                    style={{ height: "300px", marginBottom: "20px" }}
                    src={image_url}
                    alt="..."
                />
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <h1>{name}</h1>
                    <h5 className="text-secondary">{tagline}</h5>
                </div>
                <div>
                    <h2 className="text-secondary">{attenuation_level}</h2>
                    <p>
                        <strong>{first_brewed}</strong>
                    </p>
                </div>
            </div>
            <p>{description}</p>
            <p className="text-secondary">
                <strong>{contributed_by}</strong>
            </p>
        </div>
    );
};