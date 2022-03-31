import React from "react";


const HomeBox = ({ img, title, description }) => {

    return (
        <div className="Home-card">
            <img src={img} className="card-img-top mt-3" alt="" />
            <div className="card-body">
                <h2 className="card-title text-start">{title}</h2>
                <p className="card-text text-start" style = {{color:'grey'}}>{description}
                </p>
            </div>
        </div>
    )
}

export default HomeBox


