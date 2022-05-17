import { Content, BeerImg, SameLine, AttenuationLevel, Description, ContributedBy } from "./styled/BeerDetails.styled";

const BeerDetails = ({ image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by }) => {
    return (
        <Content>
            <BeerImg>
                <img src={image_url} alt={name} />
            </BeerImg>
            <SameLine>
                <h1>{name}</h1>
                <AttenuationLevel>{attenuation_level}</AttenuationLevel>
            </SameLine>
            <SameLine>
                <h3>{tagline}</h3>
                <h5>{first_brewed}</h5>
            </SameLine>
            <Description>{description}</Description>
            <ContributedBy>{contributed_by}</ContributedBy>
        </Content>
    );
};

export default BeerDetails;