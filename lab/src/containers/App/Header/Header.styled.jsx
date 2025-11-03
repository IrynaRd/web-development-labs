import styled from 'styled-components';

export const StyledHeader = styled.div`
    padding: 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1150px;
    align-items: center;
    margin: 0 auto;
    table-layout: fixed;
    border-spacing: 10px;
    
    > div {
        display: flex;
    }
    p {
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    > span {
        margin: 0 12px;
    }
`