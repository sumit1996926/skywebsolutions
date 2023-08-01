import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Services</h2>
              <p>
                At Sky Web, we specialize in crafting innovative and dynamic web
                solutions tailored to elevate your online presence. From
                designing captivating user interfaces to developing robust
                backend systems, our expert team delivers seamless websites and
                web applications. Let us take your digital aspirations to new
                heights!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Logo Design" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="SEO" />
                  <h5>SEO</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
