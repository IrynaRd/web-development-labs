import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 130px;
  background-color: #c7cbe2ff;
  padding: 60px 150px;
  flex-wrap: wrap;
  margin: 50px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const MainImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;


export const StyledText = styled.div`
  color: white;
  font-size: 16px;
  max-width: 500px;

  h1 {
    font-size: 40px;
    color: white;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 20px;
    color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 40px;
`