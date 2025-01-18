import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import Search from '../components/Search/Search';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Handcrafted Products</h1>
      <Search />
      <h2>Featured Products</h2>
      <ProductList />
    </div>
  );
};

export default Home;