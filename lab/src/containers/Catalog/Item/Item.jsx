import React, {useState} from "react"
import {Button} from "../Catalog.styled";
import { MainImage } from "../../Home/Home.styled";
import { SectionWrapper, StyledText, FildsWrapper, AmountInput, FooterWrapper } from "./Item.styled";
import Filter from "../Select/Select";
import { CoverOptions } from "../../../assets/data/data";

function ItemPage ({ book, onGoBack }) {
    const [amount, setAmount] = useState(1);
    const totalPrice = book.price * (parseInt(amount, 10)|| 1);

    return (
        <div>
            <SectionWrapper>
                <MainImage src={book.image} alt="Books" />
                <StyledText>
                    <h1>{book.title}</h1>
                    <p>Author: {book.author}</p>
                    <p>Description: {book.text}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Origin: {book.origin}</p> 
                    <FildsWrapper>
                        <Filter placeholder = {"Book Cover"} options = {CoverOptions} onChange={value => setSelectedCover(value)}/>
                        <AmountInput type="number" placeholder="Amount" step="1.0" min="0" onChange={(e) => setAmount(e.target.value)}/>
                    </FildsWrapper>
                </StyledText>

                <FooterWrapper>
                    <h2>Price: {totalPrice}$</h2>
                    <FildsWrapper>
                        <Button onClick={onGoBack}>Go back</Button>
                        <Button>Add to cart</Button>
                    </FildsWrapper>
                </FooterWrapper>
            </SectionWrapper>

        </div>
    )
};

export default ItemPage;