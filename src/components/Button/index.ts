import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  font-size: 1.8rem;
  background-color: ${(props) => props.theme.colors.primary};
  border: 0.4rem solid ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  transition: all ease-in 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary_dark};
    border-color: ${(props) => props.theme.colors.primary_dark};
  }

  &:disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    cursor: default;
  }
`;

export default Button;
