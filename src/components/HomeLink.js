import React from 'react';


export default function HomeLink(props) {
    return (
    <div>
        <img className="home-img" src={props.link.imgSrc} alt="beers"></img>
        <div className="home-text">
            <h2>{props.link.name}</h2>
            <p className="home-p">Ad commodo et non aliqua anim non. Proident Lorem fugiat incididunt mollit in aliqua nostrud dolor eu sint esse. Cupidatat aute ullamco proident tempor quis excepteur excepteur mollit ex tempor occaecat dolor veniam. Lorem ad pariatur labore reprehenderit aliqua Lorem est do in excepteur fugiat.</p>
        </div>
    </div>
    )
}
