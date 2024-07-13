import styled from 'styled-components';
import { Row, Col } from 'antd';

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) => (direction === "left" ? "row" : "row-reverse")};

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled("div")<{ isMissionSection: boolean }>`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }

  ${({ isMissionSection }) =>
    isMissionSection &&
    `
    @media only screen and (max-width: 575px) {
      padding-top: 0;
    }
  `}
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  .carousel .control-next.control-arrow:before, .carousel .control-prev.control-arrow:before {
    color: white; /* Make arrows white */
  }
`;

export const MissionTitle = styled("h6")`
  font-size: 2rem;  /* Adjust the title font size */
  text-align: left; /* Align title to the left */

  @media only screen and (max-width: 1200px) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const MissionContent = styled("p")`
  text-align: left;  /* Align text to the left */
  font-size: 1.2rem;   /* Adjust font size */

  @media only screen and (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 21px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 21px;
  }
`;

export const MissionImage = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Adding a slight border radius to images */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding a shadow for better appearance */
`;

export const MissionCol = styled(Col)`
  padding-right: 20px; /* Adding space between image and text */

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px; /* Adding margin for smaller screens */
  }

  @media (max-width: 575px) {
    display: none; /* Hide image column on smaller screens */
  }
`;
