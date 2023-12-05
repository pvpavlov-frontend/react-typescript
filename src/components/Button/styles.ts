import styled from "styled-components";

interface ButtonComponetProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponetProps>`
  width: 100%;
  margin: 0;
  padding: 10px;
  outline: none;
  cursor: pointer;
  background: ${({ disabled }) => (disabled ? "grey" : "#298296")};
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  border: none;
`;
