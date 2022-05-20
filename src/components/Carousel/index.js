import React from "react";
import { Button } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import img from "../../images/preview.png";
import {
  Wrapper,
  Container,
  Subtitle,
  ButtonWrap,
  TextWrapper,
  Row,
  Img,
  ImgWrap,
  Column,
  TopLine,
  Heading,
  Column1,
  HeadWrapper,
  SubWrapper,
} from "./CarouselElements";
const Carousel = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine>Quality Smart Watch</TopLine>
                <HeadWrapper>
                  <Heading>For people who</Heading>
                </HeadWrapper>
                <HeadWrapper>
                  <Heading>do not go with the </Heading>
                </HeadWrapper>
                <HeadWrapper>
                  <Heading>times</Heading>
                </HeadWrapper>
                <SubWrapper>
                  <Subtitle>
                    BWE is home to the greatest collection of luxury
                  </Subtitle>
                </SubWrapper>
                <SubWrapper>
                  <Subtitle>
                    watches. all certified as authentic and collector Quality.
                  </Subtitle>
                </SubWrapper>
                <SubWrapper>
                  <Subtitle>
                    Watches, all certified as authentic and Collector quality
                  </Subtitle>
                </SubWrapper>
                <ButtonWrap>
                  <Button variant="primary">
                    Shop now <FiArrowRight />
                  </Button>
                </ButtonWrap>
              </TextWrapper>
            </Column>
            <Column1>
              <ImgWrap>
                <Img src={img} alt="watch" />
              </ImgWrap>
            </Column1>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Carousel;
