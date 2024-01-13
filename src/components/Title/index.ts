import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  color: ${(props) => props.theme.colors.secondary};
`;

export default Title;
