import styled from "styled-components";

const Input = styled.input`
  max-width: 80rem;
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.light};
  font-size: 1.8rem;
  border: 0.3rem solid ${(props) => props.theme.colors.light};
  outline: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};

  &:focus {
    border-color: ${(props) => props.theme.colors.secondary};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.7;
  }
`;

export default Input;
