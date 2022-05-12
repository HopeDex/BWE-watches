import React from "react";
import {
  Container,
  HeadLine,
  TextWrapper,
  Wrapper,
} from "../Products/ProductElements";
import { Subtitle, TopLine } from "../Carousel/CarouselElements";
import { Row, Row1, Div, Title, BottomLine, Img } from "./BlogElements";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";
import apple from "../../images/oppo.png";

const Blog = () => {
  const mystyle = {
    width: "40%",
    height: "5px",
    color: "white",
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Row>
            <TextWrapper>
              <TopLine>____ .4</TopLine>
              <HeadLine>Blog</HeadLine>
              <Subtitle>
                Bwe blog has all the articles and <br /> everything you need to
                get started
              </Subtitle>
            </TextWrapper>
            <TextWrapper>
              <svg>
                <path
                  className="line1"
                  d="M0,100
                     Q125,50 200,100
                     T300 100"
                />
              </svg>
            </TextWrapper>
            <TextWrapper>
              <Button>
                Go to Blog <FaArrowRight />
              </Button>
            </TextWrapper>
          </Row>
          <Row1>
            <div className="coll1">
              <hr style={mystyle} />
              <Title>
                One to WatchBrew
                <br />
                Watch Co.
              </Title>
              <div className="overlay">
                <div className="text">
                  <Img src={apple} alt="Apple" class="image" />
                </div>
              </div>
              <BottomLine>Read More</BottomLine>
            </div>

            <Div>
              <hr style={mystyle} />
              <Title>Hands-On The Parmigiani Tonda PF Collection</Title>
              <div className="overlay">
                <div className="text">
                  <img src="{applelogo}" alt="Apple" class="image" />
                </div>
              </div>
              <BottomLine>Read More</BottomLine>
            </Div>

            <Div>
              <hr style={mystyle} />
              <Title>
                Introducing Glashutte Original Rosy New Perpetual Calendar
              </Title>
              <div className="overlay">
                <div className="text">
                  <img src="{applelogo}" alt="Apple" class="image" />
                </div>
              </div>
              <BottomLine>Read More</BottomLine>
            </Div>

            <Div>
              <hr style={mystyle} />
              <Title>In-Depth With The Apple Watch Series 7</Title>
              <div className="overlay">
                <div className="text">
                  <img src="{applelogo}" alt="Apple" class="image" />
                </div>
              </div>
              <BottomLine>Read More</BottomLine>
            </Div>
          </Row1>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Blog;
