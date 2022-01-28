import { Carousel } from "react-bootstrap";
import IMG from "./1.png";
function CarouselImg ()  {
  return (
    <Carousel>
      <Carousel.Item interval={400}>
        <img className="d-block w-100" src={IMG} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImg;
