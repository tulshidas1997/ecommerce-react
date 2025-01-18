import React, { useState } from 'react';
import './Cart.css';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Replace with actual cart items
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} onClick={() => handleShowModal(item)} />
              <div>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
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

export default Cart;