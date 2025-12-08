import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Navigation from "../Navigation/Navigation"
import {AuthProvider } from "../Auth/AuthProvider/AuthProvider";

function App() {
  return (
    <div>
        <Header />
        <AuthProvider>
          <Navigation/>
        </AuthProvider>
        <Footer />
    </div>
  )
}

export default App
