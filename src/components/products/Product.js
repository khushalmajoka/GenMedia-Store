import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductDetailCard from "./ProductDetailCard";
import "./Product.css";
import ProductList from "./ProductList";

const Product = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 10000],
    rating: 1,
  });

  const passFilters = (
    selectedCategoriesToPass,
    priceRangeToPass,
    selectedRatingToPass
  ) => {
    setFilters({
      categories: selectedCategoriesToPass,
      priceRange: priceRangeToPass,
      rating: selectedRatingToPass,
    });
  };

  return (
    <div className="main-container">
      <Sidebar className="left-sidebar" passFilters={passFilters} />
      <ProductList filters={filters} />
      <ProductDetailCard className="right-sidebar" />
    </div>
  );
};

export default Product;
