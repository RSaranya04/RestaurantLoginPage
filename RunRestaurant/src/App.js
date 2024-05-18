import React from "react";
import LoginPage from "./pages/LoginPage";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import RestaurantList from "./pages/RestaurantList";
function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/restaurantList" element={<RestaurantList />} />
      </Routes>
    </div>

  );
}

export default App;
