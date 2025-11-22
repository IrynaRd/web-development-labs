import React, {useState} from "react"
import {Button} from "../Catalog/Catalog.styled";
import { BtsWrapper } from "./Cart.styled";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <>
            <h1>Shopping cart</h1>
            {cartItems.map((item) => (
                <CartItem key = {`${item.book.id}-${item.book.cover}`} item = {item}/>
                
            ) )}
            <BtsWrapper>
                <Button>Back to catalog</Button>
                <Button>Continue</Button>
            </BtsWrapper>
        </>
    )
};

export default Cart;