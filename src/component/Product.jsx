import React from "react";
import Promo1 from "../assets/img/2084182.jpg";
import Promo2 from "../assets/img/3772.jpg";
import Img1 from "../assets/img/2100022 (2).jpg";
import Img2 from "../assets/img/31686.jpg";
import locationImg from "../assets/img/pin.png";
import imgTomat from "../assets/img/tomato.jpg";
import imgGarlic from "../assets/img/garlic.jpg";
import imgCabai from "../assets/img/cabai.png";

export default () => {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2
            className="section-heading text-uppercase"
            style={{ color: "#008000" }}
          >
            HASIL TANI
          </h2>
          <h3
            className="section-subheading text-muted"
            style={{ color: "#008000" }}
          >
            Hasil tani / produk yang baru saja dipanen.
          </h3>
        </div>
        <div className="row ">
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={Img2} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Bawang Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 80.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Siborong-borong
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={imgTomat} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Tomat Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 30.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Porsea
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img
                    src={imgGarlic}
                    width="auto"
                    height="200px"
                    alt="promo"
                  />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Bawang Putih</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 60.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Balige
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={imgCabai} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Cabai Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 80.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Laguboti
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={Img2} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Bawang Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 80.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Siborong-borong
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={imgTomat} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Tomat Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 30.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Porsea
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img
                    src={imgGarlic}
                    width="auto"
                    height="200px"
                    alt="promo"
                  />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Bawang Putih</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 60.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Balige
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={imgCabai} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Cabai Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 80.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Laguboti
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={Img2} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Bawang Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 80.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Siborong-borong
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={imgTomat} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Tomat Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 30.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Porsea
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img
                    src={imgGarlic}
                    width="auto"
                    height="200px"
                    alt="promo"
                  />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Bawang Putih</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 60.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Balige
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3 card">
            <div className="portfolio-item">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={imgCabai} width="auto" height="200px" alt="promo" />
                </div>
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Cabai Merah</div>
                <div className="captionProduct">
                  <p style={{ fontWeight: "bold", color: "#F0DA0C" }}>
                    Rp 80.000,00
                  </p>
                  <p>Minimal pembelian : 10 Ton</p>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={locationImg}
                        width="20px"
                        height="auto"
                        alt="promo"
                      />
                      Laguboti
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="#contact">
                  <button className="btn btn-product" type="button">
                    <i className="fa fa-phone" width="auto" height="200px" />
                    <i> Hubungi Penjual</i>
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
