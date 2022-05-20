import React from "react";
import { Col } from "react-bootstrap";
import { Container, Wrapper, Img } from "../Products/ProductElements";
import { TopLine, TopRow, Heading, Row } from "./AboutElements";
import logo from "../../images/apple.jpg";
const About = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TopRow>
            <TopLine>__________ 5.</TopLine>
            <Heading>Who we are.</Heading>
          </TopRow>
          <Row>
            <div>
              <TopLine>
                Story <br />
                well this is some random crap really i dont have anything to say
                here and i dont know what the hell im doing really. just random
                guy on auto pilot
              </TopLine>
              <Img src={logo} alt="image" />
            </div>
            <div>
              <Img src={logo} alt="image" />
              <TopLine>
                Story <br />
                well this is some random crap really i dont have anything to say
                here and i dont know what the hell im doing really. just random
                guy on auto pilot
              </TopLine>
            </div>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
