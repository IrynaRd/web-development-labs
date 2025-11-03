import React from "react";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styled';
import Home from '../Home/Home';
import Catalog from "../Catalog/Catalog";

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
                <Route path="/cart" element={<div>cart</div>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </LinkingWrapper>
    </Router>
);

export default Navigation;