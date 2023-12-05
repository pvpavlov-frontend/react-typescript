import styled from "styled-components";

import { colors } from "styles/colors";

export const Homework22Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: ${colors.primary};
`;

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 470px;
  min-height: 470px;
  height: fit-content;
  width: fit-content;
  background-color: white;
  padding: 40px;
  border-radius: 4px;
  font-size: 16px;
`;

export const LoginFormName = styled.p`
  color: rgb(123, 54, 247);
  font-size: 18px;
  font-weight: bold;
`;
