import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Hooks
import AuthHook from "../../hooks/auth";

// Welcome
import WelcomeMessage from "./Welcome";

const Home: React.FC = () => {
  const auth = useContext(AuthHook);
  const isAuthenticated = auth.authenticated;

  if (isAuthenticated) {
    return <WelcomeMessage />;
  }

  return (
    <div>
      <h1>You are not logged in</h1>
      <h2>
        <Link to="/login">click here</Link> to enter
      </h2>
    </div>
  );
};

export default Home;
