import styled from "styled-components";

export const TopLine = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  animation: 2s anim-lineUp ease-in;
  @keyframes anim-lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 0.75;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
export const Heading = styled.p`
  color: white;
  font-size: 38px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  animation: 2s anim-lineUp ease-in;
  @keyframes anim-lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 0.75;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
export const TopRow = styled.div`
  justify-content: space-between;
  height: 20%;
  align-items: center;
`;
export const Row = styled.div`
  display: grid;
  justify-content: space-between;
  margin-top: 10px;
  height: 550px;
  grid-auto-columns: 48%;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 480px) {
    max-width: 100%;
    grid-auto-columns: 100%;
    grid-template-areas: "col1 " "col2 " "col3 ";
    height: auto;
  }
`;
