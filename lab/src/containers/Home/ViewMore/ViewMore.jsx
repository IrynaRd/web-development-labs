import React from "react";
import { Button } from "../../Catalog/Catalog.styled";
import { MoreWrapper, NewsListWrapper, NewsItem } from "./ViewMore.styled";
import Picture from "../../../assets/icons/news.png"

function More({ onHide }) {
    return (
        <MoreWrapper>
            <h1>Latest news</h1>
            
            <NewsListWrapper>
                <NewsItem>
                    <img src={Picture} alt="pict" />
                    <h3>New Book Release Announced!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Exciting new fantasy novel hits the shelves next month.
                    </p>
                </NewsItem>

                <NewsItem>
                    <img src={Picture} alt="pict" />
                    <h3>Author Interview: Exclusive</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Exciting new fantasy novel hits the shelves next month.
                    </p>
                </NewsItem>

                <NewsItem>
                    <img src={Picture} alt="pict" />
                    <h3>Library Week Highlights</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Exciting new fantasy novel hits the shelves next month.
                    </p>
                </NewsItem>
            </NewsListWrapper>
            
            <Button onClick={onHide}>Hide</Button>
        </MoreWrapper>
    );
};

export default More;