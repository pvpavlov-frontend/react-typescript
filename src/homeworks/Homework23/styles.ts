import styled from "styled-components";

import { colors } from "styles/colors";

export const Homework23Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${colors.primary};
`;

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 590px;
  background-color: white;
  padding: 60px;
  margin: 60px;
  border-radius: 4px;
  font-size: 16px;
`;

export const LoginFormName = styled.p`
  color: rgb(123, 54, 247);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const LoginFormSpan = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #1C1C1C;
  margin-bottom: 30px;
`;
