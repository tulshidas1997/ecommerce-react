import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<any>(null); // Replace with actual product data
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} onClick={handleShowModal} />
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {showModal && product && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;