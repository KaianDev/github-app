import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.4rem solid ${(props) => props.theme.colors.secondary};
`;

export const Frame = styled.div`
  display: flex;
  width: 20rem;
  background-color: red;
  margin: 0 auto;
  height: auto;
  border-radius: 50%;
  border: 0.4rem solid ${(props) => props.theme.colors.primary};
`;

export const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Info = styled.div`
  font-size: 1.4rem;
`;
