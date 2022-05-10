import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  color: black;
  padding: 10px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 750px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    height: 770px;
  }
  @media screen and (max-width: 480px) {
    height: 770px;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 10px;
`;
export const TopLine = styled.h6`
  font-weight: bold;
`;
export const HeadLine = styled.h2`
  font-weight: bold;
  color: white;
  font-size: 2rem;
`;
export const Row = styled.div`
  display: grid;
  grid-auto-columns: 33%;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: "col2 col1 col3";

  @media screen and (max-width: 480px) {
    grid-auto-columns: 100%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;

export const Row1 = styled.div`
  display: grid;
  grid-auto-columns: 33%;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: "col4 col1 col3";

  @media screen and (max-width: 480px) {
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
