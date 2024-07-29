import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerSignin from "./Compoenents/CustomerSignIn";
import Shopkeeper from "./Compoenents/ShoppkerSignIn";
import UserPage from "./Compoenents/Userpage";
import ShopkeeperCart from "./Compoenents/ShopkeeperCart";
import PreviousOrdres from "./Compoenents/PreviousOrdres";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<CustomerSignin />} />
        <Route path="/shopkeeper" element={<Shopkeeper />} />
        <Route path="/items" element={<UserPage />} />
        <Route path="/shopkeeperCart" element={<ShopkeeperCart />} />
        <Route path="/orderhistory" element={<PreviousOrdres />} />
       
      </Routes>
    </Router>
  );
};

export default App;
