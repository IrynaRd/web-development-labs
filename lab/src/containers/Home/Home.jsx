import React, {useState} from "react";
import { SectionWrapper, StyledText, StyledButton, CardWrapper, MainImage } from "./Home.styled";
import CardItem from "../CardItem/CardItem";
import MainPicture from "../../assets/icons/books.png";
import {books} from "../../assets/data/data";
import More from "./ViewMore/ViewMore";

const Home = () => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div>
            <SectionWrapper>
                <MainImage src={MainPicture} alt="Books" />
                <StyledText>
                    <h1>The world of Books</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Phasellus scelerisque tristique neque, eget facilisis purus <br />
                        consequat sit amet. Nulla iaculis felis eget rutrum blandit.
                    </p>
                    <StyledButton size="large" onClick={() => setShowContent(true)}>Show More</StyledButton>
                </StyledText>
            </SectionWrapper>

            {showContent && (
                <More onHide={()=>setShowContent(false)} />
            )}

            <CardWrapper>
                {books
                    .slice(0, 3)
                    .map(({ title, author, text, image, price, id }) => (
                        <CardItem
                            key={id}
                            title={title}
                            author = {author}
                            text={text}
                            imageSrc={image}
                            price={price}
                            
                        />
                ))}
            </CardWrapper>
        </div>
    );
};

export default Home;