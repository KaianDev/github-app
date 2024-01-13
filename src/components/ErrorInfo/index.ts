import styled from "styled-components";

const ErrorInfo = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  font-size: 2rem;
  margin: 2rem auto;
  width: max-content;
  border-radius: 2rem;
  background-color: red;
`;

ErrorInfo.defaultProps = {
  children: "Dados inválidos, tente novamente",
};

export default ErrorInfo;
