import styled from "styled-components";

export const Container = styled.div`
  color: black;
  padding: 10px;

  @media screen and (max-width: 480px) {
    height: 750px;
    margin: 0;
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 750px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  background: rgb(0, 113, 209);
  background: linear-gradient(
    90deg,
    rgba(0, 113, 209, 1) 0%,
    rgba(1, 7, 110, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  @media screen and (max-width: 768px) {
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    height: auto;
    max-width: 100%;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 10px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100px;
  }
`;
export const TopLine = styled.h6`
  font-weight: bold;
`;
export const HeadLine = styled.h2`
  font-weight: bold;
  color: white;
  font-size: 2rem;
  animation: 2s anim-lineUp ease-in;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
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
export const Row = styled.div`
  margin-top: 0px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: "col2 col1 col3";

  @media screen and (max-width: 480px) {
    padding: 0px;
    max-width: 100%;
    grid-auto-columns: 30%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
    max-width: 100%;
    grid-auto-columns: 30%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;

export const Row1 = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: "col4 col1 col3";

  @media screen and (max-width: 480px) {
    width: 300px;
    grid-auto-columns: 100%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;

export const Column = styled.div`
  background: #fff;
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 0 15px;
  grid-area: col1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Column1 = styled.div`
  background: #fff;
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 0 15px;
  grid-area: col2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Column2 = styled.div`
  background: white;
  margin-bottom: 15px;
  position: relative;
  border-radius: 20px;
  padding: 0 15px;
  grid-area: col3;
`;

export const Column4 = styled.div`
  background: transparent;
  margin-bottom: 15px;
  color: white;
  position: relative;
  border-radius: 20px;
  padding: 0 15px;
  grid-area: col4;
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  display: block;
  @media screen and (max-width: 480px) {
    height: 200px;
    width: 100%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;

  &:hover {
    bottom: 0;
    height: 100%;
  }
`;
