import { InputProps } from "./types";

import { InputContainer, InputLabel, InputComponent } from "./styles";

function Input({
  disabled,
  name,
  placeholder,
  labelName,
  value,
  onChange,
  type,
}: InputProps) {
  const inputId = `${name}-${Math.random()}`;

  return (
    <InputContainer>
      <InputLabel htmlFor={inputId}>{labelName}</InputLabel>
      <InputComponent
        type={type}
        value={value}
        onChange={onChange}
        id={inputId}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;
