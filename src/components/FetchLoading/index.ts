import styled from "styled-components";

const FetchLoading = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  font-size: 2rem;
  margin: 2rem auto;
  width: max-content;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.primary_light};
  animation: switchColors infinite 1s alternate;
`;

FetchLoading.defaultProps = {
  children: "Carregando...",
};

export default FetchLoading;
