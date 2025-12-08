import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonFooter = styled.button`
    background: ${props => props.$primary ? "#1f1518" : "white"};
    color: ${props => props.$primary ? "white" : "#1f1518"};
    width: 195px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #928f90;
    border-radius: 3px;
    border-radius: 8px;
    font-weight: 400;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    
    &:hover {
    border-color: #646cff;
    }
    &:focus,
    &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}
`;