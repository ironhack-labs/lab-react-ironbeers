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
        linkContent: "All Beers (or are they?)",
        sectionContent: "Don't tell anyone, but Heineken tastes really bitter and nobody actually likes it."
    },

    {
        id: 2,
        image: img02,
        link: "/RandomBeer",
        linkContent: "Random Beers (60% of the time, this links works every time)",
        sectionContent: "I wonder if a skeleton could drink beer without any problems regarding their bones."
    },
    {
        id: 3,
        image: img03,
        link: "/NewBeer",
        linkContent: "New Beer (if you close your eyes)",
        sectionContent: "Can you figured out what is written on this picture?"
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