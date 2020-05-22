import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const FormContainer = styled.form`
  max-width: 450px;
  width: 100%;
  color: #f8f8f2;
`;

const GroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin: 0.7rem 0;

  &.hidden {
    opacity: 0;
    position: absolute;
    top: -1000%;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6272a4;
  }
`;

const Submit = styled.button`
  text-transform: uppercase;
  margin: 0.7rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #50fa7b;
    color: #282a36;
  }
`;

export { Container, FormContainer, GroupContainer, Input, Submit };
