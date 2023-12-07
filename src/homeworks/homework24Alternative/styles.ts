import { styled } from "styled-components";

import { colors } from "styles/colors";

export const Homework24Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 200px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 500px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
`;

export const ContainerJokes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 80%;
`;
