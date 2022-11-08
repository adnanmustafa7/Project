import img from "../assets/img.jpg"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"

import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          height="600px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mac Book</h3>
          <p>Premium Quality Mac Book very fast in speed with high processor</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          height="600px"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Hp Laptop</h3>
          <p>Used Laptop that is best in condition and in reasonable prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          height="600px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mac Book Pro</h3>
          <p>
            Limited Version Mac book that can be find in best of quality.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

        </>
    );


}

export default Slider;