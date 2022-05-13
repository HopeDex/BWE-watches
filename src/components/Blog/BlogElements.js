import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  justify-content: space-between;
  height: 35%;
  align-items: center;
  grid-template-areas: "col1 col2 col3";

  @media screen and (max-width: 480px) {
    grid-auto-columns: 100%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;
export const Row1 = styled.div`
  display: grid;
  justify-content: space-between;
  margin-top: 10px;
  height: 550px;
  grid-auto-columns: 24%;
  grid-template-areas: "col1 col2 col3 col4";

  @media screen and (max-width: 480px) {
    grid-auto-columns: 100%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 0;
  top: 20%;
  width: 100%;
  text-align: left;
`;

export const BottomLine = styled.a`
  position: absolute;
  bottom: 8px;
  padding-left: 80px;
  font-size: 18px;
  color: white;
`;
export const Img = styled.img`
  opacity: 0.7;
  display: block;
  width: 100%;
  height: 100%;
`;
