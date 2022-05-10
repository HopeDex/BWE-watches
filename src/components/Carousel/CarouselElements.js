import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  padding: 10px;
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
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
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col2 col1'`};
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;


  }
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
export const HeadWrapper = styled.div`
  margin-bottom: 4px;
  overflow: hidden;
  padding: 0;
  height: 3rem;
`;
export const Heading = styled.h1`
  font-size: 48px;

  line-height: 1;
  font-weight: 600;
  color: black;

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
export const SubWrapper = styled.div`
  margin-bottom: 4px;
  overflow: hidden;
  padding: 0;
  height: 1.9rem;

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
  max-width: 440px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  color: black;
  animation: 2s anim-lineUp ease-in;
`;
export const ButtonWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  animation: 2s anim-lineUp ease-in;
`;
export const ImgWrap = styled.p`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  animation: navb 1s linear 0s 1 normal forwards;

  @keyframes navb {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
  }
`;
