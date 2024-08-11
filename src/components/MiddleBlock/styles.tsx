import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0rem 0 0.25rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  padding-bottom: 1rem;  // Add padding bottom for all screen sizes

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 2rem;  // Increase padding bottom on smaller screens
  }
`;

