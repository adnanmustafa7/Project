import '../Styles/top_products.css'
import { Row, Col, Container, Button } from 'react-bootstrap';
import img1 from '../assets/bg2.jpg'
import img2 from '../assets/bg1.png'

const Top_Products = () => {
    return (
        <>
            <div>
                <h1 className="text">Our top products</h1>
                <Container>
                    <Row className='d-flex justify-content-evenly'>
                        <Col sm={12} lg={6} >
                            <img className='img1' src={img1} height="550px" width="550px" alt="no img" />
                            <h2 className='text1_head'><b>Vedeo</b></h2>
                            <p className='p'>Feel of sound</p>
                            <Button id='btn1'>Browser Products</Button>

                        </Col>
                        <Col sm={12} lg={6}>
                            <img className='img1' src={img2} height="550px" width="550px" alt="no img" />
                            <h2 className='text2_head'><b>Denos T12</b></h2>
                            <p className='p2'>Small and powerfull</p>
                            <Button id='btn2'>Browser Products</Button>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    );
}
export default Top_Products;