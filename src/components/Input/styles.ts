import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: 0em;
  text-align: left;
  color: #6F6F6F;
  margin-bottom: 5px;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  border: 1px solid #3F3F3F;
  &:focus-visible,
  &:focus {
    outline: none;
  }
`;
