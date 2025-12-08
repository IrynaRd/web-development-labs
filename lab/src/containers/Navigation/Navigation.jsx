import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styled';
import Home from '../Home/Home';
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import { ItemWrapper } from "../Catalog/Catalog";
import Checkout from "../Cart/Checkout/Checkout";
import { Success } from "../Cart/Checkout/Checkout";
import LogIn from "../Auth/auth_components/LogIn/Login";
import SignUp from "../Auth/auth_components/SignUp/SignUp";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";
import ProtectedRoute from "../Auth/AuthProvider/ProtectedRoute";
import PublicRoute from "../Auth/AuthProvider/PublicRoute";


const Navigation = () => {
    const { isAuthenticated, logOut } = useAuth();
    return (
        <Router>
            <LinkingWrapper>
                <ul>
                    {isAuthenticated &&
                        <>
                            <li>
                                <NavLink to="/" end className={({ isActive }) => isActive ? 'selected' : undefined}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/catalog" end className={({ isActive }) => isActive ? 'selected' : undefined}>Catalog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" end className={({ isActive }) => isActive ? 'selected' : undefined}>Cart</NavLink>
                            </li>
                            <button onClick={() => logOut()}>Sign out</button>
                        </>}

                    {!isAuthenticated && (
                        <>
                            <li>
                                <NavLink to="/login" end className={({ isActive }) => isActive ? 'selected' : undefined}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" end className={({ isActive }) => isActive ? 'selected' : undefined}>Sign Up</NavLink>
                            </li>
                        </>
                    )}
                </ul>

                <Routes>
                    
                    <Route path="/catalog" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
                    <Route path="/catalog/:bookId" element={<ProtectedRoute><ItemWrapper /></ProtectedRoute>} />
                    <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                    <Route path="/cart/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                    <Route path="/cart/checkout/success" element={<ProtectedRoute><Success /></ProtectedRoute>} />
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="*" element={<div>Not found</div>} />

                    <Route path="/login" element={<PublicRoute><LogIn /></PublicRoute>} />
                    <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
                </Routes>
            </LinkingWrapper>
        </Router>
    );


};

export default Navigation;