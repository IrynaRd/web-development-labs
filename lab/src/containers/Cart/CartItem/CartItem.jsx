import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import MainPicture from "../../../assets/icons/books.png";
import { CartItemImage, CartItemWrapper, QuantityButton, QuantityControl } from "./CartItem.styled";
import { updateAmount, removeItem } from "../../../states/cartList/cartList";
import { decreaseAvailability, increaseAvailability } from "../../../states/available/availableSlice";
import { useSelector } from "react-redux";
import { Button } from "../../Catalog/Catalog.styled";
import { useNavigate } from "react-router-dom";

function CartItem ({item}) {
    const { book, amount } = item;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemIdPayload = { 
        id: book.id, 
        cover: book.cover 
    };
    const handleToItem = () => {
        navigate(`/catalog/${book.id}`); 
    };
    const liveAvailability = useSelector(state => { 
        const inventoryBook = state.inventory.books.find(b => b.id === book.id);
        return inventoryBook ? Number(inventoryBook.availability) : 0; 
    });

    const handleAmountChange = (change) => {
        const newAmount = amount + change;
        const updatedCartPayload = { ...itemIdPayload, amountChange: change };
        
        if (change < 0) {
            if (newAmount < 1) {
                dispatch(increaseAvailability({ bookId: book.id, amountToIncrease: amount })); 
                dispatch(removeItem(itemIdPayload)); 
            } else {
                dispatch(updateAmount(updatedCartPayload));
                dispatch(increaseAvailability({ bookId: book.id, amountToIncrease: 1 }));
            }
        } 
        
        else if (change > 0) {
            if (book.availability <= 0) {
                alert(`Нема в наявності`);
                return; 
            }
            
            dispatch(updateAmount(updatedCartPayload));
            dispatch(decreaseAvailability({ bookId: book.id, amountToDecrease: 1 }));
        }
    };

    const handleRemoveItem = () => {
        dispatch(increaseAvailability({ bookId: book.id, amountToIncrease: amount })); 
        dispatch(removeItem(itemIdPayload));
    };

    return (
        <div>
            <CartItemWrapper>
                <CartItemImage src={MainPicture} alt="Books"/>
                <div>
                    <h2>{book.title}</h2>
                    <p>{book.cover}</p>
                </div>
                <QuantityControl>
                    <QuantityButton onClick={() => handleAmountChange(-1)} disabled={amount <= 1}>-</QuantityButton>
                    <span>{amount}</span>
                    <QuantityButton onClick={() => handleAmountChange(1)}disabled={liveAvailability <= 0}>+</QuantityButton>
                </QuantityControl>
                
                <h2>{book.price * amount}$</h2>
                <Button onClick={handleRemoveItem} style={{ cursor: 'pointer', color: '#1e344d' }}>remove</Button>
                <Button onClick={handleToItem}>To Item</Button>
            </CartItemWrapper>
        </div>
    )

};

export default CartItem;