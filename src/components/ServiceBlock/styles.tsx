import styled from 'styled-components';
import { Row } from 'antd';

export const ServiceRow = styled(Row)`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
`;

export const ServiceWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  cursor: pointer;

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(100% - 20px);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h2`
  color: rgb(24, 33, 109);
  font-size: 24px;
`;

export const Description = styled.p`
  text-align: left;
  color: rgb(24, 33, 109);
  font-size: 16px;
  flex-grow: 1;
`;

export const ExpandedSection = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    &.expanded-under-all {
      display: block;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ExpandedContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  h3 {
    color: rgb(24, 33, 109);
    font-size: 22px;
    margin-bottom: 10px;
  }

  p {
    color: rgb(24, 33, 109);
    font-size: 16px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;
