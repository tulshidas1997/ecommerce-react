import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, description, imageUrl, price }) => {
  return (
    <div className="product" key={id}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;