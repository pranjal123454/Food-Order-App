import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import UserReview from "./pages/UserReview";
// import MainHeader from "./components/MainHeader";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {/* <MainHeader/> */}

      <Switch>
        <Route path="/" exact>
          <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
              <Meals />
            </main>
            <Footer />
          </CartProvider>
        </Route>
        <Route path="/aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/usereview">
          <UserReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
