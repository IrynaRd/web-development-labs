import styled from 'styled-components';
export const CartItemImage = styled.img`
    width: 150px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
`;

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-color: #1e344d;
    width: 1000px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 7px;
    margin: 10px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
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

