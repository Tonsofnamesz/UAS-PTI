import React from "react";
import '../Products.css';

const ProductDetail = ({ product, handleAddToCart }) => {

    return (
      <div className="productDetail">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* OPTIONAL review section */}
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductDetail;