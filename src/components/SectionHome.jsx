import React from 'react';
import { Link } from 'react-router-dom';
import './SectionHome.css';

const SectionHome = ({ title, url, img }) => {

    return (
        <section className="SectionHome" >
            <Link to={url} className="text-decoration-none">
                <img src={img} />
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, adipisci quisquam accusamus iste possimus mollitia iure tenetur voluptas officia aliquam exercitationem, nesciunt ut excepturi? Sit totam sed tenetur cum. Eligendi?</p>

            </Link>

        </section>
    )
};

export default SectionHome;