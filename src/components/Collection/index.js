import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column,
  Column1,
  Img,
  Img2,
} from "./CollectionElements";
import { Button } from "react-bootstrap";
import upper from "../../images/project.png";
import upper1 from "../../images/project2.png";
import upper2 from "../../images/project3.png";
import { FiArrowRight } from "react-icons/fi";
import {
  Subtitle,
  SubWrapper,
  TopLine,
  HeadWrapper,
  Heading,
  ButtonWrap,
  TextWrapper,
} from "../Carousel/CarouselElements";
const Collection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Column>
              <TextWrapper color={"black"}>
                <TopLine>_____ .2 </TopLine>
                <HeadWrapper>
                  <Heading>Collection by Dexter Kazama</Heading>
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
                  <Button>
                    Shop now <FiArrowRight />
                  </Button>
                </ButtonWrap>
              </TextWrapper>
            </Column>
            <Column1>
              <Img src={upper} />
              <Img2 src={upper1} />
              <Img src={upper2} />
            </Column1>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Collection;
