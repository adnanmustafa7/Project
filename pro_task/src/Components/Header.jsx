import '../Styles/header.css'
import { Nav, Container } from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter,  BsSearch} from "react-icons/bs";



const Header = () => {
    return (
        <>
        
            <Nav className="bg-dark p-1">
                <Container className=''>
                    <div className='d-flex justify-content-end'>
                    <Nav.Item>
                           <p className="mt-2 p_tag">Free Shipping over $100 & 60 days returns</p>
                           </Nav.Item>
                        
                        <Nav.Item >
                            <Nav.Link to="#"><BsFacebook /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="#"><BsInstagram /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="#"><BsTwitter/></Nav.Link>
                            </Nav.Item>
                            </div>
                </Container>
            </Nav>
            <Nav>
                <Container>
                    <div className='mt-4 d-flex'>
                        <img src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore.png" height="35px" alt="" />
                        <BsSearch/><input type="text" placeholder='Enter your search' />
                    </div>
                    <div className='d-flex mt-3'>
                    <Nav.Item>
                           <Nav.Link to="#" active><p id="p">Home</p></Nav.Link>
                           </Nav.Item>
                        <Nav.Item >
                            <Nav.Link to="#"><p id="p">Feactures</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="#"><p id="p">Shop</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="#"><p id="p">Pages</p></Nav.Link>
                            </Nav.Item>                           
                    </div>


                </Container>




            </Nav>




        </>
    );
}


export default Header;