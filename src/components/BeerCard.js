import { Content, BeerImg, Name, Tagline, ContributedBy } from "./styled/BeerCard.styled";
import StyledLink from "./styled/StyledLink";

const BeerCard = ({ image_url, name, tagline, contributed_by }) => (
    <section>
        <StyledLink to="/">
            <Content>
                <BeerImg src={image_url} alt={name} />
                <div>
                    <Name>{name}</Name>
                    <Tagline>{tagline}</Tagline>
                    <ContributedBy><strong>Created by:</strong> {contributed_by}</ContributedBy>
                </div>
            </Content>
        </StyledLink>
        <hr />
    </section>
);

export default BeerCard;