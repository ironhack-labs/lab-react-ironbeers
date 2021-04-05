import React from 'react'
import { Link } from 'react-router-dom';
const SectionHome = ({ title, img, route }) => {
    return (
      <div className="SectionHome">
        <Link to={route} style={{"textDecoration":"none", "color":"inherit"}}>
            <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-muted">
                Lorem fistrum amatomaa fistro mamaar de la pradera no te digo
                trigo por no llamarte Rodrigor a wan. Al ataquerl ese que llega al
                ataquerl la caidita de la pradera torpedo ese pedazo de sexuarl va
                usté muy cargadoo mamaar. Benemeritaar está la cosa muy malar te
                voy a borrar el cerito papaar papaar tiene musho peligro está la
                cosa muy malar de la pradera a wan se calle ustée sexuarl torpedo.
                Diodeno al ataquerl diodeno mamaar. Mamaar a gramenawer te voy a
                borrar el cerito ese pedazo de no puedor.
                </p>
            </div>
            </div>
        </Link>
      </div>
    );
}

export default SectionHome