import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

// Hooks
import AuthHook from "../../hooks/auth";

// Styles
import { Container, FormContainer } from "./styles";

const Login: React.FC = () => {
  const auth = useContext(AuthHook);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login("eve.holt@reqres.in", "cityslicka");
  };

  const isAuthenticated = auth.authenticated;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <button type="submit">Entrar</button>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
