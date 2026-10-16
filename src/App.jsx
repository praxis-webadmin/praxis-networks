import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { ProductsPage, ProductDetailPage } from "./pages/Products.jsx";
import { ServicesPage, ServiceDetailPage } from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function NotFound() {
  return (
    <main className="not-found container">
      <h1>Page not found</h1>
      <p>The page you’re looking for may have moved.</p>
      <Link className="btn btn-primary" to="/">Back to Home</Link>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
