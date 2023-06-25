import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <Container>
      <Carousel className="Carousel-1">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/1.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/2.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/3.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carouselCapiton">
        <h3>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/beers"}
          >
            All the Beers
          </Link>
        </h3>
        <p>
          Crafted with care, our beer selection list boasts a tantalizing
          symphony of flavors, pouring an intoxicating fusion of traditional
          classics and bold innovations.
        </p>
      </div>
      <Carousel className="Carousel-2">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/4.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/5.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/6.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carouselCapiton">
        <h3>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/random"}
          >
            Random Beer
          </Link>
        </h3>
        <p>
          Embrace the element of surprise and toast to the unknown as you seize
          the opportunity to savor a serendipitous sip from our roulette of
          beers.
        </p>
      </div>
      <Carousel className="Carousel-3">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/7.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/8.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/9.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carouselCapiton">
        <h3>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/new"}
          >
            New Beer
          </Link>
        </h3>
        <p>
          Unlock the power of choice and curate your own liquid destiny as you
          seize the opportunity to weave your personal beer tale into our
          ever-evolving selection, one pint at a time.
        </p>
      </div>
    </Container>
  );
};
