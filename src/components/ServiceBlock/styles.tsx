// src/components/ServiceBlock/styles.ts

import styled from 'styled-components';
import { Row } from 'antd';

export const ServiceRow = styled(Row)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ServiceWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  flex: 1;
  text-align: center;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
`;
