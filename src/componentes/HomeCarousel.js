import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home/home.jpg"
          alt="Inicio"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home/home1.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home/home2.jpg"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
