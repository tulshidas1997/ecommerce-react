import React from 'react';

const UserAccount: React.FC = () => {
  return (
    <div className="user-account">
      <h1>User Account</h1>
      <section className="account-settings">
        <h2>Account Settings</h2>
        {/* Add form for updating user information */}
      </section>
      <section className="order-history">
        <h2>Order History</h2>
        {/* Display user's past orders */}
      </section>
    </div>
  );
};

export default UserAccount;