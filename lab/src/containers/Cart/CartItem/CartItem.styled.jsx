import React, {useState} from "react";
import styled from 'styled-components';
export const CartItemImage = styled.img`
    width: 150px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
`;

export const CartItemWrapper = styled.div`
    display: flex;
    border-width: 1px;
    border-color: #1e344d;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  
  span {
    padding: 0 10px;
    font-weight: bold;
  }
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 18px;
  line-height: 1;
  background-color: #f8f8f8;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &:disabled {
    cursor: not-allowed;
    color: #ccc;
  }
`;