import React, { useContext } from "react";

// Hooks
import AuthHook from "../../../hooks/auth";

const Welcome: React.FC = () => {
  const auth = useContext(AuthHook);

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <>
      <h1>
        Welcome <span>😊</span>
      </h1>
      <div>
        <p>
          Click to{" "}
          <a href="/" onClick={handleLogout}>
            logout
          </a>
        </p>
      </div>
    </>
  );
};

export default Welcome;
