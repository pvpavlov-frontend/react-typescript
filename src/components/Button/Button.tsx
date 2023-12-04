import { ButtonComponent } from "./styles";

import { ButtonProps } from "./types";

function Button({
  disabled = false,
  name = "Send",
  type = "submit",
  isRedFont,
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      type={type}
      className="button-component"
      onClick={onClick}
      $isRedFont={isRedFont}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
