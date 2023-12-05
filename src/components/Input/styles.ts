import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: black;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;
