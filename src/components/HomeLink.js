import { StyledHomeLink, BeerImg, Text, Title, Paragraph } from "./styled/HomeLink.styled";
import StyledLink from "./styled/StyledLink";

const HomeLink = ({ path, image, title, paragraph }) => (
    <StyledHomeLink>
        <StyledLink to={path}>
            <BeerImg src={image} alt="asset" />
            <Text>
                <Title>{title}</Title>
                <Paragraph>{paragraph}</Paragraph>
            </Text>
        </StyledLink>
    </StyledHomeLink>
);

export default HomeLink;