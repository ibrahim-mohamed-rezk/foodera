import React from "react";
import about_img from "../../assets/1.png";
import about_img_2 from "../../assets/2.png";
import card_1 from "../../assets/01.jpg";
import card_2 from "../../assets/02.jpg";
import card_3 from "../../assets/03.jpg";
import { FaCheck, FaPlay } from "react-icons/fa";
import "./home.css";
import Card from "../card/Card";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <div>
      <header id="home">
        <div className="container">
          <div className="header-content">
            <h2>Good food choices are good investments.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <div className="header-btns">
              <button className="order-now">Order Now</button>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </div>
      </header>
      <div className="space100"></div>
      <section className="site-info">
        <div className="container">
          <div className="site-info-content">
            <div className="site-info-item">
              <span className="num">1287+</span>
              <span className="text">SAVINGS</span>
            </div>
            <div className="site-info-item">
              <span className="num">5786+</span>
              <span className="text">PHOTOS</span>
            </div>
            <div className="site-info-item">
              <span className="num">1440+</span>
              <span className="text">ROCKETS</span>
            </div>
            <div className="site-info-item">
              <span className="num">7110+</span>
              <span className="text">GLOBES</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bout" id="About">
        <div className="space100"></div>
        <div className="container about-container">
          <div className="about-content">
            <div className="about-img">
              <img src={about_img} alt="about-us-img" />
            </div>
            <div className="about-blog">
              <h3>
                We pride ourselves on making real food from the best
                ingredients.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="about-content">
            <div className="about-blog">
              <h3>
                We make everything by hand with the best possible ingredients.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>
                  <FaCheck />
                  Etiam sed dolor ac diam volutpat.
                </li>
                <li>
                  <FaCheck />
                  Erat volutpat aliquet imperdiet.
                </li>
                <li>
                  <FaCheck />
                  purus a odio finibus bibendum.
                </li>
              </ul>
              <button className="btn-lg">Learn More</button>
            </div>
            <div className="about-img">
              <img src={about_img_2} alt="about-us-img-2" />
            </div>
          </div>
        </div>
        <div className="about-2">
          <div className="container">
            <div className="about-2-content">
              <h1>
                When a man's stomach is full it makes no difference whether he
                is rich or poor.
              </h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <br />
              <br />
              <div className="our-story">
                <FaPlay />
                Watch Our Story
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore" id="Explore">
        <div className="space100"></div>
        <div className="container">
          <div className="sec-1">
            <h3>Explore Our Foods</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
          <div className="sec-2">
            <Card
              img={card_1}
              title={"Rainbow Vegetable Sandwich"}
              desc={"Time: 15 - 20 Minutes | Serves: 1"}
              price={"$10.50"}
              oldprice={"$11.70"}
            />
            <Card
              img={card_2}
              title={"Vegetarian Burger"}
              desc={"Time: 30 - 45 Minutes | Serves: 1"}
              price={"$9.20 "}
              oldprice={"$10.50"}
            />
            <Card
              img={card_3}
              title={"Raspberry Stuffed French Toast"}
              desc={"Time: 10 - 15 Minutes | Serves: 1"}
              oldprice={"$12.50"}
              price={"$13.20"}
            />
          </div>
        </div>
      </section>
      <div id="Reviews" className="space100"></div>
      <section className="slider-sec">
        <div className="container">
          <div className="slider-content">
            <h3>Testimonials</h3>
            <div className="slider-slides">
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <div id="FAQ" className="space100"></div>
      <section className="faq">
        <div className="container">
          <div className="faq-content">
            <h3>Frequently Asked Questions</h3>
            <div className="gird-blog">
              <div className="row pt-5">
                <div className="faq-item col">
                  <div className="faq-item-title">
                    <h4>
                      <span>~ </span> Is Foodera Bread really baked fresh each
                      day?
                    </h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language.
                    </p>
                  </div>
                </div>
                <div className="faq-item col">
                  <div className="faq-item-title">
                    <h4>
                      <span>~ </span>
                      Do you bake breads containing animal fats or products
                    </h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pt-2">
                <div className="faq-item col">
                  <div className="faq-item-title">
                    <h4>
                      <span>~ </span>Can I order your products online?{" "}
                    </h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language.
                    </p>
                  </div>
                </div>
                <div className="faq-item col">
                  <div className="faq-item-title">
                    <h4>
                      <span>~ </span> When are you opening a shop near me?
                    </h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="baked">
        <div className="overlay"></div>
        <div className="container">
          <h4>Baked fresh daily by bakers with passion.</h4>
          <button>Learn More</button>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sub-content">
            <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
            <div className="input-sec">
              <input type="text" placeholder="Email Address here"/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
