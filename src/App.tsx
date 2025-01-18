import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';
import ProductListing from './pages/ProductListing';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/account" component={UserAccount} />
        <Route path="/cart" component={Cart} />
        <Route path="/list" component={ProductListing} />
      </Switch>
    </Router>
  );
};

export default App;