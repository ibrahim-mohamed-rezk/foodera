import Carousel from "react-bootstrap/Carousel";
import person1 from "../../assets/1.jpg";
import person2 from "../../assets/2.jpg";
import "./slider.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slider-img">
          <img className="d-block w-100" src={person1} alt="slider-img" />
        </div>
        <div className="slider-info">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live.
          </p>
          <span>Simab Dave - Web Designe</span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-img">
          <img className="d-block w-100" src={person2} alt="slider-img" />
        </div>
        <div className="slider-info">
          <p>
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live far from the countries Vokalia."
          </p>
          <span>Johnthan Doe - UX Designer</span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-img">
          <img className="d-block w-100" src={person1} alt="slider-img" />
        </div>
        <div className="slider-info">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live.
          </p>
          <span>Simab Dave - Web Designe</span>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
