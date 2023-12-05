import { UserData } from "./types";
import React, { useState, ChangeEvent } from "react";
import Input from "components/Input";
import Button from "components/Button";

import { Homework23Wrapper, LoginCard, LoginFormSpan } from "./styles";
import { InputLabel } from "components/Input/styles";

const Homework23 = () => {
  const [nameValue, setName] = useState<string>("");
  const [surnameValue, setSurname] = useState<string>("");
  const [positionValue, setPosition] = useState<string>("");
  const [ageValue, setAge] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => { setName(event.target.value); };
  const onChangeSurnameInput = (event: ChangeEvent<HTMLInputElement>) => { setSurname(event.target.value); };
  const onChangePositionInput = (event: ChangeEvent<HTMLInputElement>) => { setPosition(event.target.value); };
  const onChangeAgeInput = (event: ChangeEvent<HTMLInputElement>) => { setAge(event.target.value); };

  const handleCreate = () => {
    if (nameValue === "" || surnameValue === "" || positionValue === "" || ageValue === "") {
      alert("Введите данные сотрудника");
    } else {
      const user: UserData = {
        nameValue,
        surnameValue,
        positionValue,
        ageValue
      };
      setUserInfo(user);
    }
  };

  return (
    <Homework23Wrapper>
      <LoginCard>
        <Input
          labelName="Имя"
          value={nameValue}
          name="name"
          onChange={onChangeNameInput}
        />
        <Input
          labelName="Фамилия"
          value={surnameValue}
          name="surname"
          onChange={onChangeSurnameInput}
        />
        <Input
          labelName="Возраст"
          value={ageValue}
          name="age"
          onChange={onChangeAgeInput}
        />
        <Input
          labelName="Должность"
          value={positionValue}
          name="position"
          onChange={onChangePositionInput}
        />

        <Button
          type="button"
          name="Создать"
          onClick={handleCreate}
        />
      </LoginCard>

      {userInfo && (
        <LoginCard>

          <InputLabel>
            Имя:
          </InputLabel>
          <LoginFormSpan>
            {userInfo.nameValue}
          </LoginFormSpan>

          <InputLabel>
            Фамилия:
          </InputLabel>
          <LoginFormSpan>
            {userInfo.nameValue}
          </LoginFormSpan>

          <InputLabel>
            Возраст:
          </InputLabel>
          <LoginFormSpan>
            {userInfo.ageValue}
          </LoginFormSpan>

          <InputLabel>
            Должность:
          </InputLabel>
          <LoginFormSpan>
            {userInfo.positionValue}
          </LoginFormSpan>

        </LoginCard>
      )}
    </Homework23Wrapper>
  );
};

export default Homework23;


// В этом решении мы используем хук useState для хранения значений
// из инпутов и информации о пользователе. При нажатии кнопки "Создать"
// мы проверяем, заполнены ли все поля. Если что-то не заполнено,
// мы выдаем предупреждение с помощью alert. Если все поля заполнены,
// мы создаем объект пользователя и сохраняем его в состоянии userInfo.
// Затем мы отображаем информацию о пользователе, только если userInfo не пустой.