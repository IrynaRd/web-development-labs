import React from "react";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';

const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                </li>
                <li>
                    <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/catalog" element={<div>catalog</div>} />
                <Route path="/cart" element={<div>cart</div>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </LinkingWrapper>
    </Router>
);

export default Navigation;