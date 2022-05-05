import { Col, FormText, Image, ModalTitle, Row } from "react-bootstrap"
import './list-card.css'
const ListCard = ({ image_url, name, tagline, contributed_by }) => {
    return (
        <>
            <Row>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Image className="image" src={image_url}></Image>
                </Col>
                <Col className="title" xs={{ span: 4 }}>
                    <ModalTitle  >{name}</ModalTitle>
                    <FormText className="tag-title">{tagline} </FormText>
                    <hr />
                    <FormText> Created by:  {contributed_by} </FormText>

                </Col>

            </Row>

        </>

    )

}
export default ListCard