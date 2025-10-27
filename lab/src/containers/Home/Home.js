import React from "react";

import { SectionWrapper, StyledText, StyledButton, CardWrapper, MainImage } from "./Home.styles";


import CardItem from "../../components/CardItem/CardItem";

import MainPicture from "../../icons/books.png";
import CardPicture from "../../icons/images.jpg";

const data = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        text: "Fantasy novel about a wizard boy",
        image: CardPicture,
        price: 1000,
    },
    {
        title: "Harry Potter 2",
        author: "J.K. Rowling",
        text: "Fantasy novel about a wizard boy 2",
        image: CardPicture,
        price: 500,
    },
    {
        title: "Harry Potter 3",
        author: "J.K. Rowling",
        text: "Fantasy novel about a wizard boy 3",
        image: CardPicture,
        price: 200,
    },
];

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
                {data.map(({ title, author, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        author = {author}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
        </div>
    );
};

export default Home;