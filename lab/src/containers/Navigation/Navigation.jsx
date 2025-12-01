import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styled';
import Home from '../Home/Home';
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import { ItemWrapper } from "../Catalog/Catalog";
import Checkout from "../Cart/Checkout/Checkout";
import { Success } from "../Cart/Checkout/Checkout";

const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <ul>
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'selected' : undefined}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" end className={({ isActive }) => isActive ? 'selected' : undefined}>Catalog</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" end className={({ isActive }) => isActive ? 'selected' : undefined}>Cart</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:bookId" element={<ItemWrapper />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/checkout" element={<Checkout />}/>
                <Route path="/cart/checkout/success" element={<Success />}/>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </LinkingWrapper>
    </Router>
);

export default Navigation;