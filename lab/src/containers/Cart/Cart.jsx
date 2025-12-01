import React, {useState} from "react"
import {Button} from "../Catalog/Catalog.styled";
import { BtsWrapper } from "./Cart.styled";
import CartItem from "./CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const handleCheckout = () => {
        navigate(`/cart/checkout`);
    }

    return (
        <>
            <h1 style={{textAlign:'center', fontSize: '35px', marginBottom: '37px'}}>Shopping cart</h1>
            {cartItems.map((item) => (
                <CartItem key = {`${item.book.id}-${item.book.cover}`} item = {item}/>
                
            ) )}
            <BtsWrapper>
                <Button onClick={handleBack}>Go back</Button>
                <Button onClick={handleCheckout}>Continue</Button>
            </BtsWrapper>
        </>
    )
};

export default Cart;