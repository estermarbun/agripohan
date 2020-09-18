import React from "react";
import Promo1 from "../assets/img/2084182.jpg";
import Promo2 from "../assets/img/3772.jpg";
import Img1 from "../assets/img/2100022 (2).jpg";
import Img2 from "../assets/img/31686.jpg";
import locationImg from "../assets/img/pin.png";
export default () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center ">
          <h2 className="section-heading text-uppercase darkGreenText">
            About
          </h2>
          <h3 className="section-subheading text-muted">
            Sejarah PT. Pohan Agriculture
          </h3>
        </div>
        <ul className="timeline ">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/1.jpg"
                alt=""
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading darkGreenText">
                <h4>June 2019</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  We are a company oriented in food processing. We manufacturing
                  food for international and local market. To meet global health
                  standard, producing hygienic food is our priority. Therefore,
                  we produce food with Hazard Analysis and Critical Control
                  Points standard (HACCP).
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/2.jpg"
                alt=""
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading darkGreenText">
                <h4>March 2020</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  We export to Japan, South Korea and England. We are
                  manufacturer of Frozen Baked and Steamed Sweet Potato Paste,
                  Steamed Slice / Cut sweet Potato, Dice Cut Boiled Sweet
                  Potato, Frozen Whole Kernel Sweet Corn and other frozen
                  vegetables product. We also produce Fried Vegetables and Fruit
                  Chips such as Banana and Oyster Mushroom. We can do production
                  based on Customer specification need. Please you don't
                  hesitate to contact us.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
