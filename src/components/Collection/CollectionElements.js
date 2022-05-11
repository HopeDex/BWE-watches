import styled from "styled-components";

export const Container = styled.div`
  color: black;
  padding: 10px;
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
  background: black;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    height: 770px;
  }
  @media screen and (max-width: 480px) {
    height: 770px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-auto-columns: 48%;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 480px) {
    grid-auto-columns: 100%;
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;
export const Column = styled.div`
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Img = styled.img`
  background: white;
  width: 80%;
  height: 150px;
  display: block;
  border-radius: 10px;
  margin: 10px;
`;

export const Img2 = styled.img`
  background: white;
  width: 80%;
  height: 150px;
  display: block;
  border-radius: 10px;
  margin: 30px;
  margin-left: 80px;
`;
