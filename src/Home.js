import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="body">
      <h1>Zomato</h1>
      <Link to="/Dining">
        <h2>Dining</h2>
      </Link>
      <Link to="/Delivery">
        <h2>Delivery</h2>
      </Link>
    </div>
  );
}
export default Home;
