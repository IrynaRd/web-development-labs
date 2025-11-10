import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 130px;
    background-color: #f3f3fa;
    padding: 60px 150px;
    flex-wrap: wrap;
    margin: 50px;
    margin-top: 10px;   
    border-radius: 10px;
`;

export const StyledText = styled.div`
    color: #1e344d;
    font-size: 16px;
    max-width: 500px;

    h1 {
        font-size: 40px;
        color: #26275e;
        margin-bottom: 20px;
    }

    p {
        line-height: 1.5;
        margin-bottom: 20px;
    }
`;

export const FildsWrapper = styled.div`
    display: flex;
    gap: 5px;
`

export const AmountInput = styled.input`
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 5px;
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 840px;
`