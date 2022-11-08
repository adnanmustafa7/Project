import { Row, Col, Card } from "react-bootstrap";
import '../Styles/cards.css'
import notebook from '../assets/notebook.png'
import smartphone from '../assets/s_phone.png'
import smartwatch from '../assets/smartwatch.png'
import tv from '../assets/tv.png'
import gaming from '../assets/gaming.png'
import view from '../assets/viewall.png'



const Cards = () => {
    return (
        <>
        <div className="mt-3">
            <Row>
                <Col sm={4} md={6} lg={2}>
                    <Card className='text-center' id="card">
                        <Card.Body>
                            <Card.Title><img src={notebook} width="100px" height="100px" alt="no img" /></Card.Title>
                            <Card.Text>
                               Notebook
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={4} md={6} lg={2}>
                    <Card  className='text-center' id="card">
                        <Card.Body>
                            <Card.Title><img src={smartphone} width="100px" height="100px" alt="no img"/></Card.Title>
                            <Card.Text>
                               Smartphones
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={4} md={6} lg={2}>
                    <Card className='text-center' id="card">
                        <Card.Body>
                            <Card.Title><img src={smartwatch} width="100px" height="100px" alt="no img"/></Card.Title>
                            <Card.Text>
                                Smartwatches
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={4} md={6} lg={2}>
                    <Card className='text-center' id="card">
                        <Card.Body>
                            <Card.Title><img src={tv} width="100px" height="100px" alt="no img"/></Card.Title>
                            <Card.Text>
                                TV /Audio
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={4} md={6} lg={2}>
                    <Card className='text-center' id="card">
                        <Card.Body>
                            <Card.Title><img src={gaming} width="100px" height="100px" alt="no img"/></Card.Title>
                            <Card.Text>
                                Gaming
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={4} md={6} lg={2}>
                    <Card className='text-center' id="card">
                        <Card.Body>
                            <Card.Title><img src={view} width="100px" height="100px" alt="no img"/></Card.Title>
                            <Card.Text>
                              View all
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    );
}
export default Cards;