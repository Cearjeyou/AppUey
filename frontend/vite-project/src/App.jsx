import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Home } from "./routes/Home";
import { ProductSimples } from "./components/ProductSimples";
import { Category } from "./components/Category";
import { ProductRentals } from "./components/ProductRentals";
import { ProductPlaces } from "./components/ProductPlaces";
import { DetailProduct } from "./components/DetailProduct";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/categories" element={<Category />} />
            <Route path="/product/Simples" element={<ProductSimples />} />
            <Route path="/product/Rentals" element={<ProductRentals />} />
            <Route path="/product/Places" element={<ProductPlaces />} />
            <Route path="/product/detail/:typeProduct/:id" element={<DetailProduct />}></Route>
          </Route>
        </Routes>
    </Router>
  )
}

export default App
