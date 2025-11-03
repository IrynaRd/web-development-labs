import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffffff;
    color: white;
    padding: 30px 10px;
    gap: 20px;
    max-width: 1150px;
    margin: 0 auto;
`;

export const TopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

  h1 {
    font-size: 24px;
    color: black;
  }
`;

export const TextBlock = styled.div`
    max-width: 400px;
    line-height: 1.4;

  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    color: black;
  }

  p {
    color: #000000ff;
    font-weight: 300;
    margin: 0;
  }
`;

export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const IconBase = styled(Icon)`
    font-size: 26px;
    color: ${({ color }) => color || "black"};
    cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
  }
`;

export const VerticalLine = styled.div`
    width: 1px;
    height: 50px;
    background-color: white;
`;

export const HorizontalLine = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #e0e0e0;
`;

export const StyledText = styled.p`
    font-size: 14px;
    color: #757575;
    margin: 0;
    text-align: center;
`;