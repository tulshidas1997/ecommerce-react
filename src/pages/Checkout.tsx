import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../components/Cart/Cart'; // Assuming a custom hook for cart management

const Checkout: React.FC = () => {
  const history = useHistory();
  const { cartItems, totalAmount, clearCart } = useCart();

  const handleCheckout = () => {
    // Logic for handling the checkout process
    // This could involve API calls to process payment, etc.
    clearCart();
    history.push('/thank-you'); // Redirect to a thank you page after checkout
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Your Items</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount}</h3>
          <button onClick={handleCheckout}>Complete Purchase</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;