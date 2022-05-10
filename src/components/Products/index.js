import React from "react";
import { TopLine } from "../Carousel/CarouselElements";
import logo from "../../images/preview.png";
import logo1 from "../../images/apple1.png";
import logo2 from "../../images/razor.png";
import logo3 from "../../images/try.jpg";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import {
  Container,
  Wrapper,
  Row,
  Row1,
  HeadLine,
  TextWrapper,
  Column,
  Column1,
  Column2,
  Column4,
  Img,
  Overlay,
} from "./ProductElements";
const Products = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TextWrapper>
            <TopLine>_____ .1</TopLine>
            <HeadLine>Products.</HeadLine>
          </TextWrapper>
          <Row>
            <Column>
              <Img src={logo1} />
              <Overlay />
            </Column>
            <Column1>
              <Img src={logo3} />
            </Column1>
            <Column2>
              <Img src={logo2} />
            </Column2>
          </Row>
          <Row1>
            <Column>
              <Img src={logo} />
            </Column>
            <Column4>
              <p>
                BWE is home to the greatest collection of <br></br>pre-owned
                luxury watches and well more watches hehe
                <br />
                BWE is home to the greatest collection of <br></br>pre-owned
                luxury watches and well more watches hehe
                <br />
                <br />
                <br />
                <Button color="white">
                  Shop Now <FaArrowRight />
                </Button>
              </p>
            </Column4>
            <Column2>
              <Img src={logo} />
            </Column2>
          </Row1>
        </Wrapper>
      </Container>
    </>
  );
};

export default Products;
