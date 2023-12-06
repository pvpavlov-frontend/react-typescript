import { useState, useEffect, ChangeEvent } from "react";

import Input from "components/Input";

import { Lesson24Wrapper, Text, Card } from "./styles";

function Lesson24() {
  const [firstName, setFirstName] = useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [catError, setCatError] = useState<string | undefined>(undefined);

  const lesson24: string = "Lesson 24";

  const onChangeFirstNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const getCatFacts = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      setCatFact(data.fact);
    } else {
      setCatError("Error duriing get cat facts");
    }
  };

  // 1. Lifecycle: Initialization(создание)
  useEffect(() => {
    console.log("Lificycle method: initialization");
    getCatFacts();
    // Тут обычно делаются get запросы на сервер, котрый нужно сделать чтобы отобразить что-то на странице в самом начале
  }, []);

  // 2. Lifecycle: Updating(обновление компонента)
  useEffect(() => {
    console.log("Lifecycle: Updation");
    // Тут можно делать любые неободимые действия при обновления.
    // Например: мы вводим что-то и клавиатуры и на каждый введенный символ, следим за обновлением
    // компонента и отправляем запрос на бэкенд для получения совпаний с введенными вами символами
    // проимеро может быть поиск людей в facebook по совпадении имени

    getCatFacts();
  }, [firstName]);

  // 3. Lifecycle: Unmounting(смерть компонента)
  useEffect(() => {
    return () => setCatFact(undefined);
  }, [setCatFact]);

  // 4. Бесконечный рендеринг. !!!! Никогда не используйте useEffect без 2 аргумента: массива зависимостей
  return (
    <Lesson24Wrapper>
      <Card>
        <Text>{lesson24}</Text>
        <Input
          onChange={onChangeFirstNameValue}
          value={firstName}
          labelName="На каждый введенный символ получите новый факт о коте"
        />
        {firstName}
        <Text>Факты о котах:</Text>
        {catFact && <Text>{catFact}</Text>}
        {catError && <Text>{catError}</Text>}
      </Card>
    </Lesson24Wrapper>
  );
}

export default Lesson24;
