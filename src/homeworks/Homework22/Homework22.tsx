import { useState, ChangeEvent } from "react";

import Input from "components/Input";
import Button from "components/Button";

import { Homework22Wrapper, LoginCard, LoginFormName } from "./styles";

function Homework22() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    // setEmailValue
    console.log(event.target.value);
    // evernt.target.value - это то что мы вводим с клавиатуры и кладем в state
    setEmailValue(event.target.value);
  };

  const onChangePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    // evernt.target.value - это то что мы вводим с клавиатуры и кладем в state
    setPasswordValue(event.target.value);
  };

  return (
    <Homework22Wrapper>
      <LoginCard>
        <LoginFormName>Login form</LoginFormName>
        <Input
          value={emailValue}
          name="email"
          labelName="Email"
          placeholder="Enter email"
          onChange={onChangeEmailInput}
        />
        {emailValue}
        <Input
          name="password"
          labelName="Password"
          placeholder="Enter Password"
          type="password"
          onChange={onChangePasswordInput}
          value={passwordValue}
        />
        <Button
          type="button"
          name="LogIn"
          onClick={() => {
            console.log("Login action");
            console.log(
              `Post data: `, { email: emailValue, password: passwordValue }
            );
          }}
        />
      </LoginCard>
    </Homework22Wrapper>
  );
}

export default Homework22;
