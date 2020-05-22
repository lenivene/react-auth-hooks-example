import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

// Hooks
import AuthHook from "../../hooks/auth";

// Styles
import {
  Container,
  FormContainer,
  GroupContainer,
  Input,
  Submit,
} from "./styles";

const Login: React.FC = () => {
  const auth = useContext(AuthHook);

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const isAuthenticated = auth.authenticated;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit} autoComplete="off">
          <GroupContainer>
            <label htmlFor="email">
              <b>Username</b>
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </GroupContainer>
          <GroupContainer>
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="new-password"
              required
            />
          </GroupContainer>
          <Submit type="submit">Login</Submit>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
