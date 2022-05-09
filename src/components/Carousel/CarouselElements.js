import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  padding: 10px;
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 770px;
  }
  @media screen and (max-width: 480px) {
    height: 770px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-auto-column: minimax(auto, 1fr);
  align-items: center;
  grid-template-areas: col1 col2;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: black;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
