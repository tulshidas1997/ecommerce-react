import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]); // Replace with actual product data
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="home">
      <h1>Welcome to Our Handcrafted Products</h1>
      {featuredProducts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {featuredProducts.map(product => (
            <li key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} onClick={() => handleShowModal(product)} />
              <div>
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {showModal && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p>${selectedProduct.price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;