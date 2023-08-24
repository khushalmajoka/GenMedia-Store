import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { FaStar } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ passFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedRating, setSelectedRating] = useState(1);

  const handleCategoryChange = (e) => {
    const category = e.target.value
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRangeChange = (e, data) => {
    setPriceRange(data);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(Number(e.target.value));
  };

  useEffect(() => {
    const selectedCategoriesToPass = [...selectedCategories];
    const priceRangeToPass = [...priceRange];
    const selectedRatingToPass = selectedRating;
    passFilters(selectedCategoriesToPass, priceRangeToPass, selectedRatingToPass);
  }, [selectedCategories, priceRange, selectedRating]);

  return (
    <div className="left-sidebar">
      <div className="filter-text">Filter</div>
      <div className="categories">
        <div className="categories-text head-text">Categories</div>
        <ul>
          <li>
            <input
              type="checkbox"
              value="smartphones"
              onChange={handleCategoryChange}
            />
            Smartphones
          </li>
          <li>
            <input
              type="checkbox"
              value="laptops"
              onChange={handleCategoryChange}
            />
            Laptops
          </li>
          <li>
            <input
              type="checkbox"
              value="fragrances"
              onChange={handleCategoryChange}
            />
            Fragrances
          </li>
          <li>
            <input
              type="checkbox"
              value="skincare"
              onChange={handleCategoryChange}
            />
            Skin Care
          </li>
          <li>
            <input
              type="checkbox"
              value="groceries"
              onChange={handleCategoryChange}
            />
            Groceries
          </li>
          <li>
            <input
              type="checkbox"
              value="home-decoration"
              onChange={handleCategoryChange}
            />
            Home Decoration
          </li>
        </ul>
      </div>
      <div className="price-range">
        <div className="price-range-text head-text">Price Range</div>
        <div className="range-text">{`₹${priceRange[0]} - ₹${priceRange[1]}${
          priceRange[1] === 10000 ? "+" : ""
        }`}</div>
        <div className="slider-price-range">
          <Slider
            getAriaLabel={() => "Price Range"}
            value={priceRange}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            max={10000}
          />
        </div>
      </div>
      <div className="rating">
        <div className="rating-text head-text">Rating</div>
        <div className="rating-options-container">
          <div className="rating-option">
            <input
              type="radio"
              id="rating5"
              name="rating"
              value="5"
              checked={selectedRating === 5}
              onChange={handleRatingChange}
            />
            <label htmlFor="rating5">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <span> & Up</span>
            </label>
          </div>
          <div className="rating-option">
            <input
              type="radio"
              id="rating4"
              name="rating"
              value="4"
              checked={selectedRating === 4}
              onChange={handleRatingChange}
            />
            <label htmlFor="rating4">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <span> & Up</span>
            </label>
          </div>
          <div className="rating-option">
            <input
              type="radio"
              id="rating3"
              name="rating"
              value="3"
              checked={selectedRating === 3}
              onChange={handleRatingChange}
            />
            <label htmlFor="rating3">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <span> & Up</span>
            </label>
          </div>
          <div className="rating-option">
            <input
              type="radio"
              id="rating2"
              name="rating"
              value="2"
              checked={selectedRating === 2}
              onChange={handleRatingChange}
            />
            <label htmlFor="rating2">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <span> & Up</span>
            </label>
          </div>
          <div className="rating-option">
            <input
              type="radio"
              id="rating1"
              name="rating"
              value="1"
              checked={selectedRating === 1}
              onChange={handleRatingChange}
            />
            <label htmlFor="rating1">
              <FaStar className="star-icon" />
              <span> & Up</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
