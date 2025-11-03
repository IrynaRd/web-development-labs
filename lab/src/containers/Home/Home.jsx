import React from "react";

import { SectionWrapper, StyledText, StyledButton, CardWrapper, MainImage } from "./Home.styled";


import CardItem from "../CardItem/CardItem";

import MainPicture from "../../assets/icons/books.png";
import {data} from "../../assets/data/data";

const Home = () => {
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
                    <StyledButton size="large">Show More</StyledButton>
                </StyledText>
            </SectionWrapper>

            <CardWrapper>
                {data
                    .slice(0, 3)
                    .map(({ title, author, text, image, price }, index) => (
                        <CardItem
                            title={title}
                            author = {author}
                            text={text}
                            imageSrc={image}
                            price={price}
                            id={index}
                        />
                ))}
            </CardWrapper>
        </div>
    );
};

export default Home;