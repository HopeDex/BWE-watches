import React from "react";
import Column from "./Column";
import {
  Container,
  HeadLine,
  TextWrapper,
  Wrapper,
} from "../Products/ProductElements";
import { Subtitle, TopLine } from "../Carousel/CarouselElements";
import { Row, Row1 } from "./BlogElements";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";
import { column3, column1, column2, column4 } from "./Data";

const Blog = () => {
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
            <Column {...column1} />
            <Column {...column2} />
            <Column {...column3} />
            <Column {...column4} />
          </Row1>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Blog;
