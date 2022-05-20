import React from "react";

import mi from "../../images/mi.png";
import cho from "../../images/chopard.png";
import apple from "../../images/apple.jpg";
import nike from "../../images/nike.png";
import patek from "../../images/patek.png";
import sata from "../../images/sata.png";
import lion from "../../images/lion.png";
import apple1 from "../../images/razor.png";
import applelogo from "../../images/logol.jpeg";
import milogo from "../../images/mi.jpg";
import "./index.css";
import { Container } from "../Carousel/CarouselElements";
const Brands = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="TopLayer">
          <p className="TopLine">_____ .3</p>
          <h1 className="Heading">Brands We Provide.</h1>
          <p className="Subtitle">
            BWE is provides the greatest watches from top brands
          </p>
        </div>

        <div className="GridItem">
          <div className="Item7">
            <img className="Img" src={mi} alt="mi" />
            <div className="Slide">Mi</div>
            <div className="overlay">
              <div className="text">
                <img src={milogo} alt="mi" class="image" />
              </div>
            </div>
          </div>

          <div className="Item2">
            <img className="Img" src={cho} alt="cho" />
            <div className="Overlay">
              <div className="Slide">Chopard</div>
            </div>
          </div>

          <div className="Item3">
            <img className="Img" src={apple} alt="apple" />
            <div className="overlay">
              <div className="text">
                <img src={applelogo} alt="Apple" class="image" />
              </div>
            </div>
          </div>

          <div className="Item4">
            <img className="Img" src={lion} alt="lion" />
            <div className="Overlay">
              <div className="Slide">Lion</div>
            </div>
          </div>
          <div className="Item5">
            <img className="Img" src={nike} alt="nike" />
            <div className="Overlay">
              <div className="Slide">Nike</div>
            </div>
          </div>
          <div className="Item6">
            <img className="Img" src={sata} alt="sata" />
            <div className="Overlay">
              <div className="Slide">Sata</div>
            </div>
          </div>
          <div class="Item1">
            <img src={patek} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">
                <img src={apple1} alt="Avatar" class="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Brands;
