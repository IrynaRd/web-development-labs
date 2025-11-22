import React, {useState} from "react"
import MainPicture from "../../../assets/icons/books.png";
import { CartItemImage, CartItemWrapper } from "./CartItem.styled";

function CartItem ({item}) {
    const { book, amount } = item; 
    return (
        <div>
            <CartItemWrapper>
                <CartItemImage src={MainPicture} alt="Books"/>
                <h2>{book.title}</h2>
                <p>{book.cover}</p>
                <h2>{amount}</h2>
                <p>{book.price * amount}$</p>
                <p>remove</p>
            </CartItemWrapper>
        </div>
    )

};

export default CartItem;