import { Logo } from "./styles";

import { LogoProps } from "./types";

function Button({
    name = "Logo",
    onClick,
}: LogoProps) {
    return (
        <Logo
            className="logo"
            onClick={onClick}
        >
            {name}
        </Logo>
    );
}

export default Button;