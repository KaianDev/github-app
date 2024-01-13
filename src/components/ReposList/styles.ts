import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const RepoItem = styled.li`
  width: 100%;
  border-radius: 0.5rem;

  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.primary_dark};
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const RepoItemTitle = styled.strong`
  font-size: 1.4rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
  }
`;

export const Link = styled.a`
  font-size: 1.3rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.dark};
  border-radius: 0.5rem;
  opacity: 0.8;
  cursor: pointer;
  transition: all ease-in 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
