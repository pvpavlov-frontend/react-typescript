import "./styles.css";
import { ButtonProps } from "./types";

function Button({ name = "Send", type = "submit", onClick }: ButtonProps) {
  return (
    <button type={type} className="button-component" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
