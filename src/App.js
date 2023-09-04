import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'
import React from 'react';

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  function showCartHandler() {
    setCardIsShown(true);
  }

  function hideCartHandler() {
    setCardIsShown(false);
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
