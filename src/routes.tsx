import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
};

export default MainRouter;
