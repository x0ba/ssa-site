import { Col, Carousel } from "react-bootstrap";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/assets/ensemble/carousel1.jpg",
    alt: "View from the back of the winds section",
  },
  {
    src: "/assets/ensemble/carousel2.jpg",
    alt: "View of the conductor",
  },
  {
    src: "/assets/ensemble/carousel3.jpg",
    alt: "View from backstage",
  },
];

const EnsembleCarousel = () => {
  return (
    <>
      <Col className="ensemble-carousel">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </>
  );
};

export default EnsembleCarousel;
