import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import CreateAd from "./pages/CreateAd";
import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <>
      <div className="bg-stone-800 text-white ">
        <Header />

        <div className="container m-auto px-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path={`/cart`} element={<Cart />} />
            <Route path={`/create-ad`} element={<CreateAd />} />
            <Route path={`/page`} element={<ProductPage />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
