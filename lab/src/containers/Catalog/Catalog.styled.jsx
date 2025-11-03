import styled from "styled-components"

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    row-gap: 40px;
    justify-content: space-between;
    max-width: 1150px;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
`;

export const HeadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1150px;
    align-items: center;
    margin: 0 auto;
`;

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;


export const Button = styled.button`
    background: ${props => props.$primary ? "#1f1518" : "white"};
    color: ${props => props.$primary ? "white" : "#1f1518"};
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
