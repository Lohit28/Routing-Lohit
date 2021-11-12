import React from "react";
import Home from "./Home";
import Dining from "./Dining";
import Delivery from "./Delivery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Home />
        <Routes>
          <Route path="/Dining" component={Dining} />
        </Routes>
        <Routes>
          <Route path="/Delivery" component={Delivery} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
