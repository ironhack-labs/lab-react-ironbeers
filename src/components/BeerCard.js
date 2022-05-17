import { Link } from "react-router-dom";

const BeerCard = ({ image_url, name, tagline, contributed_by }) => {
    return (
        <section>
            <Link to="/">
                <img src={image_url} alt={name} />
                <div>
                    <h1>{name}</h1>
                    <h3>{tagline}</h3>
                    <p><strong>Created by:</strong> {contributed_by}</p>
                </div>
            </Link>
        </section>
    );
};

export default BeerCard;