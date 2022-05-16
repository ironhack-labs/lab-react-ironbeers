import { StyledHomeLink, StyledLink, BeerImg, Text, Title, Paragraph } from "./styled/HomeLink.styled";

const HomeLink = ({ path, image, title, paragraph }) => {
    return (
        <StyledHomeLink>
            <StyledLink to={path}>
                <BeerImg src={image} alt="asset" />
                <Text>
                    <Title>{title}</Title>
                    <Paragraph>{paragraph}</Paragraph>
                </Text>
            </StyledLink>
        </StyledHomeLink>
    )
};

export default HomeLink;