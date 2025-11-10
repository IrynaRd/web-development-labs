import styled from "styled-components";

export const MoreWrapper = styled.div`
    padding: 20px;
    text-align: center;
`;

export const NewsListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    text-align: center;
    max-width: 1060px;
    margin-left: 60px;
    
    
`;

export const NewsItem = styled.article`
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;

    h3 {
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        color: #555;
    }
`;