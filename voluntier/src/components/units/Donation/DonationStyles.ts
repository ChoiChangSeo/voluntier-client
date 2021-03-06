import styled from "@emotion/styled";
import Slider from "react-slick";
import { breakPoints } from "../../../commons/styles/Media";
import "animate.css";
import { animated } from "react-spring";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    padding-right: 0%;
    margin-left: 0%;
  }
`;

export const Jellybox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Top = styled.div`
  width: 100%;
  height: 259px;
  background-image: url("../../../../images/donation/후원박스.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 200px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 110px;
  }
`;

export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: "GmarketSans";
  color: #ff6a9e;
  font-weight: bolder;
  line-height: 30px;

  @media ${breakPoints.tablet} {
    font-size: 20px;
    line-height: 25px;
  }

  @media ${breakPoints.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const TopContents = styled.div`
  height: 50%;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.tablet} {
    width: 500px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ContentPink = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: #ff6a9e;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const ContentBlue = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: #0085cb;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const Animated = styled(animated.div)`
  font-size: 40px;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const ContentsMary = styled.span`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: "GmarketSans";

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    line-height: 40%;
    font-size: 10px;
  }
`;

export const ContentsJelly = styled.span`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: "GmarketSans";
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    line-height: 40%;
    font-size: 10px;
  }
`;

export const ContentDetail = styled.div`
  font-size: 20px;
  font-family: "GmarketSans";

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 9px;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MiddleTitle = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const Magazine = styled.div`
  font-family: "GmarketSans";
  font-size: 12px;
  font-weight: 500;
  color: #0085cb;
  border-bottom: 1.5px solid #0085cb;
  margin-top: 5px;
  cursor: pointer;
  :hover {
    color: #ff6a9e;
    border-bottom: 1.5px solid #ff6a9e;
  }
`;

export const MySlider = styled(Slider)`
  width: 900px;
  height: auto;

  @media ${breakPoints.tablet} {
    width: 500px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const SliderContent = styled.div`
  width: 800px;
  height: 330px;
  border-radius: 20px;
  background-image: url("../../../../images/donation/donation1.png");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media ${breakPoints.mobile} {
    background-position: 80%;
  }
`;

export const SliderText = styled.div`
  color: white;
  font-family: "GmarketSans";
  font-size: 27px;
  margin: 9% 0% 0% 5%;
  display: inline-block;
  animation: "fadeInDown";
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @media ${breakPoints.tablet} {
    font-size: 18px;
  }

  @media ${breakPoints.mobile} {
    font-size: 11.5px;
  }
`;

export const SliderContent1 = styled.div`
  width: 700px;
  height: 330px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url("../../../../images/donation/donation5.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0;
`;

export const SliderContent2 = styled.div`
  width: 700px;
  height: 330px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
    url("../../../../images/donation/donation3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0;
`;

export const SliderContent3 = styled.div`
  width: 700px;
  height: 330px;
  border-radius: 20px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url("../../../../images/donation/donation4.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0;
`;

export const SliderContent4 = styled.div`
  width: 700px;
  height: 330px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url("../../../../images/donation/donation2.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 80%;
`;

export const Bottom = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  margin-left: 10%;

  @media ${breakPoints.tablet} {
    margin-left: 0%;
  }
  @media ${breakPoints.mobile} {
    margin-left: 0%;
  }
`;

export const Price = styled.div`
  width: 200px;
  height: 200px;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40%;
  text-align: center;
  cursor: pointer;
  :hover {
    height: 500px;
    transform: translate(0px, -100px);
    transition-duration: 1.5s;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 150px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
  }
`;

export const Pricediv = styled.div`
  height: 300px;

  @media ${breakPoints.tablet} {
    height: 210px;
  }

  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const PriceDetail = styled.div`
  font-family: "GmarketSans";
  font-size: 20px;
  font-weight: bolder;

  @media ${breakPoints.tablet} {
    font-size: 17px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
