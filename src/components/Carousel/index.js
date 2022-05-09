import React from "react";
import { Button } from "react-bootstrap";
import {
  Wrapper,
  Container,
  Subtitle,
  ButtonWrap,
  TextWrapper,
  Row,
  Column,
  TopLine,
  Heading,
  Column1,
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
                <Heading>
                  For people who
                  <p>do not go with the times.</p>
                </Heading>
                <Subtitle>
                  BWE is home to the greatest collection of pre-owned luxury
                  watches. {<br />}
                  all certified as authentic and collector Quality. Watches, all
                  certified {<br />}
                  as authentic and Collector quality
                </Subtitle>
                <ButtonWrap>
                  <Button>Shop now</Button>
                </ButtonWrap>
              </TextWrapper>
            </Column>
            <Column1>
              <TextWrapper>
                <TopLine>Quality Smart Watch</TopLine>
                <Heading>
                  For people who
                  <p>do not go with the times.</p>
                </Heading>
                <Subtitle>
                  BWE is home to the greatest collection of pre-owned luxury
                  watches. {<br />}
                  all certified as authentic and collector Quality. Watches, all
                  certified {<br />}
                  as authentic and Collector quality
                </Subtitle>
                <ButtonWrap>
                  <Button>Shop now</Button>
                </ButtonWrap>
              </TextWrapper>
            </Column1>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Carousel;
