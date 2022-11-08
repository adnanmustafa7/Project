import '../Styles/feather_products.css'
import { Card, Row, Col, Container } from 'react-bootstrap'
import img1 from "../assets/laptop.jpeg";

const FeatherProducts = () => {
    return (
        <>
            <h1>Featured products</h1>
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                    <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <Card id="card">
                                <Card.Body>
                                <Card.Img id="card_img" src={img1} height="250px"/>
                                    <Card.Title>Laptop</Card.Title>
                                    <Card.Text>text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>








                    </Row>
                </Container>
            </div>


        </>
    );
}
export default FeatherProducts;