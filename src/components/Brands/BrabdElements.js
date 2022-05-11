import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  height: 700px;
  max-width: 1300px;
  color: black;
  background: rgb(215, 225, 235);
  background: linear-gradient(
    105deg,
    rgba(215, 225, 235, 1) 0%,
    rgba(211, 198, 179, 1) 61%
  );

  padding: 10px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const TopLayer = styled.div`
  height: 30%;
  text-align: center;
  padding-top: 15px;
  color: black;
`;

export const TopLine = styled.p`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
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

export const Heading = styled.h1`
  font-size: 38px;
  line-height: 1;
  font-weight: 600;
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

export const Subtitle = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  animation: 2s anim-lineUp ease-in;
`;
export const GridItem = styled.div`
  display: grid;
  grid-gap: 10px;
  height: 70%;
  padding: 10px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  color: white;
`;
// export const Item1 = styled.div`
//   background-color: beige;
//   text-align: center;
//   padding: 20px;
//   font-size: 30px;
//   grid-column: 1;
//   grid-row: 1 / span 2;
//   border-radius: 25px;
// `;
export const Item1 = styled.div`
  background-color: black;
  text-align: center;
  width: 270px;
  padding: 20px;
  font-size: 30px;
  grid-column: 1;
  grid-row: 1 / span 2;
  border-radius: 25px;
`;

export const Item2 = styled.div`
  border-radius: 25px;
  background-color: black;
  width: 270px;
  text-align: center;
  padding: 20px;
  font-size: 30px;
  grid-column: 2;
  grid-row: 1;
`;

export const Item3 = styled.div`
  border-radius: 25px;
  background-color: black;
  width: 270px;
  text-align: center;
  padding: 20px;
  font-size: 30px;
  grid-column: 3;
  grid-row: 1 / span 3;
`;

export const Item4 = styled.div`
  border-radius: 25px;
  background-color: black;
  text-align: center;
  padding: 20px;
  width: 270px;
  font-size: 30px;
  grid-column: 4;
  grid-row: 1;
`;

export const Item5 = styled.div`
  border-radius: 25px;
  background-color: black;
  text-align: center;
  width: 270px;
  padding: 20px;
  font-size: 30px;
  grid-column: 1;
  grid-row: 3;
`;

export const Item6 = styled.div`
  border-radius: 25px;
  background-color: black;
  text-align: center;
  width: 270px;
  padding: 20px;
  font-size: 30px;
  grid-column: 2;
  grid-row: 2 / span 3;
`;

export const Item7 = styled.div`
  border-radius: 25px;
  padding: 20px;
  background-color: black;
  text-align: center;
  width: 270px;
  grid-column: 4;
  grid-row: 2 / span 3;
`;
export const Img = styled.img`
  width: 40%;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
`;

export const Slide = styled.div`
  white-space: nowrap;
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
