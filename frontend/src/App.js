import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./Header";
import ZiggyFooter from "./ZiggyFooter";
import LoginForm from "./components/Auth/LoginForm";
import SignUpForm from "./components/Auth/SignUpForm";
import RestaurantDetail from "./components/restaurant/RestaurantDetail";
import RestaurantsList from "./components/restaurant/RestaurantsList";
import CartPage from "./components/restaurant/Cart";
import OrderSuccess from "./components/restaurant/OrderSuccess";
import DummyPayment from "./components/restaurant/DummyPayment";
import OrderFailed from "./components/restaurant/OrderFailed";
import RecentOrders from "./components/restaurant/RecentOrder";
import Offers from "./components/restaurant/Offers";
import Help from "./components/restaurant/Help";
import ContactUs from "./components/Support/ContactUs";
import Company from "./components/Support/Company";
import Legal from "./components/Support/Legal";
import SearchResults from "./SearchResults";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : null;
  });

const handleLoginSuccess = (username, userId) => {
  setLoggedInUser(username);
  localStorage.setItem('userId', userId);
};

  const handleLogout = () => {
      localStorage.removeItem("user");
    localStorage.removeItem("userId")
    setLoggedInUser(null);
  };

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/restaurants" element={<RestaurantsList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<DummyPayment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-failed" element={<OrderFailed/> } />
        <Route path="/recent-orders" element={<RecentOrders/> } />
        <Route path="/offers" element={<Offers/> } />
        <Route path="/help" element={<Help/> } />
        <Route path="/contact" element={<ContactUs/> } />
        <Route path="/company" element={<Company/> } />
        <Route path="/legal" element={<Legal/> } />
        <Route path="/search" element={<SearchResults/> } />
      </Routes>
      <ZiggyFooter />
    </div>
  );
}

export default App;
