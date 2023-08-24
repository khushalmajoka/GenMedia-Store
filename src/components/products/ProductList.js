import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "./ProductList.css";

const BASE_URL = "https://dummyjson.com";

const ProductList = ({ filters }) => {
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((response) => {
        setProducts(response.data.products);
        setAllProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = allProducts.filter(product => {
      const isInSelectedCategories = filters.categories.length === 0 || filters.categories.includes(product.category);
      const isWithinPriceRange = filters.priceRange[1] === 10000 ? product.price >= filters.priceRange[0] : product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const isWithinRating = product.rating >= filters.rating;
  
      return isInSelectedCategories && isWithinPriceRange && isWithinRating;
    })

    setProducts(filteredProducts);
  }, [filters]);

  useEffect(() => {
    const sortedProducts = [...products];

    switch (sortOption) {
      case "name-asc":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts.sort((a, b) => a.id - b.id);
        break;
    }
    setProducts(sortedProducts);
  }, [sortOption]);

  return (
    <div className="main">
      <div className="sort-section">
        <div className="sort-text">Sort</div>
        <div className="sort-select">
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">--none--</option>
            <option value="name-asc">Name: A - Z</option>
            <option value="name-desc">Name: Z - A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
