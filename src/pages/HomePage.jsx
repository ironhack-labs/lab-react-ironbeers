import { Link } from 'react-router-dom';
import img01 from '../assets/beers.png'
import img02 from '../assets/new-beer.png'
import img03 from '../assets/random-beer.png'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack';

function Section({ image, link, linkContent, sectionContent }) {
    return (
        <Stack gap={2} className="text-start ms-4 me-4 mt-2">
            <Image src={image} />
            <Link to={link} className="h2 text-decoration-none text-dark" style={{ textDecoration: 'none' }}>{linkContent}</Link>
            <p className="h6 text-secondary text-opacity-50">{sectionContent}</p>
        </Stack>
    )
}

function HomePage() {
    const sections = [{
        id: 1,
        image: img01,
        link: "/Beers",
        linkContent: "All Beers",
        sectionContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quide commodi, dolore velit minus repellat nesciunt dolores ut illo eu necessitatibus sunt cum error sequi vel quae, qui quisquam dolorem."
    },

    {
        id: 2,
        image: img02,
        link: "/RandomBeer",
        linkContent: "Random Beers",
        sectionContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quide commodi, dolore velit minus repellat nesciunt dolores ut illo eu necessitatibus sunt cum error sequi vel quae, qui quisquam dolorem."
    },
    {
        id: 3,
        image: img03,
        link: "/NewBeer",
        linkContent: "New Beer",
        sectionContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quide commodi, dolore velit minus repellat nesciunt dolores ut illo eu necessitatibus sunt cum error sequi vel quae, qui quisquam dolorem."
    }]
    return (
        <Stack>
            {sections.map((section) =>
                <Section key={section.id} {...section} />
            )}
        </Stack>
    )
}

export default HomePage