import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import "./assets/css/index.css"
import HomePage from "./components/home/HomePage";
import ContactUs from "./components/contact/ContactUs";
import AboutUs from "./components/about/AboutUs";
import Product from "./components/product/Product";
import Services from "./components/services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
  


}

 

export default App;
