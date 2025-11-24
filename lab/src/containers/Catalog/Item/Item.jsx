import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {Button} from "../Catalog.styled";
import { MainImage } from "../../Home/Home.styled";
import { SectionWrapper, StyledText, FildsWrapper, AmountInput, FooterWrapper } from "./Item.styled";
import Filter from "../Select/Select";
import { CoverOptions } from "../../../assets/data/data";
import MainPicture from "../../../assets/icons/books.png";
import { addItemToCart } from "../../../states/cartList/cartList";
import { decreaseAvailability } from "../../../states/available/availableSlice";

function ItemPage ({ book, onGoBack }) {
    const [amount, setAmount] = useState(1);
    const totalPrice = book.price * (parseInt(amount, 10)|| 1);
    const [selectedCover, setSelectedCover] = useState(null);
    const dispatch = useDispatch();
    const addToCart  = () => {
        const amountCart = parseInt(amount, 10)|| 1;
        const addedItem = {
            book: {
                id: book.id,
                title: book.title,
                price: book.price,
                cover: selectedCover
            },
            amount: amountCart
        }
        dispatch(addItemToCart(addedItem));
        console.log("Item added");

        if (amountCart > book.availability) {
             alert("Нема в наявності");
             return; 
        }

        dispatch(decreaseAvailability({ 
            bookId: book.id, 
            amountToDecrease: amountCart 
        }));
    }
    console.log("available", book.availability);
    return (
        <div>
            <SectionWrapper>
                <MainImage src={MainPicture} alt="Books" />
                <StyledText>
                    <h1>{book.title}</h1>
                    <p>Author: {book.author}</p>
                    <p>Description: {book.text}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Origin: {book.origin}</p> 
                    <p>available: {book.availability}</p>
                    <FildsWrapper>
                        <Filter placeholder = {"Book Cover"} options = {CoverOptions} onChange={value => setSelectedCover(value)}/>
                        <AmountInput type="number" placeholder="Amount" step="1.0" min="0" onChange={(e) => setAmount(e.target.value)}/>
                    </FildsWrapper>
                </StyledText>

                <FooterWrapper>
                    <h2>Price: {totalPrice}$</h2>
                    <FildsWrapper>
                        <Button onClick={onGoBack}>Go back</Button>
                        <Button onClick={addToCart}>Add to cart</Button>
                    </FildsWrapper>
                </FooterWrapper>
            </SectionWrapper>

        </div>
    )
};

export default ItemPage;