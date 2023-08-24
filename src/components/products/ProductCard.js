import React from "react";
import "./ProductCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product, onClick }) => {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating - fullStars !== 0;

  const renderStars = (count, isHalf) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(<FaStar key={i} className="star yellow" />);
      } else if (isHalf && i === count + 1) {
        stars.push(<FaStarHalfAlt key={i} className="star half-yellow" />);
      } else {
        stars.push(<FaStar colo key={i} className="star" />);
      }
    }
    return stars;
  };

  return (
    <div onClick={onClick} className="product-card-container">
      <div className="image-container">
        <img src={product.thumbnail} alt={`${product.title}`} />
      </div>
      <div className="content">
        <div id="title">{product.title}</div>
        <div id="description">{product.description}</div>
        <div id="rating">
          {renderStars(fullStars, hasHalfStar)}
          <span id="rating-text">{product.rating}</span>
        </div>
      </div>
      <div className="right-container">
        <div className="partition-line" />
        <div className="price-container">
          <div id="price">${product.price}</div>
          <div id="mrp">{`$${(product.discountPercentage + product.price).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
