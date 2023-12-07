import { useState, useEffect } from "react";

import Button from "components/Button";

import { Homework24Wrapper, Text, Card, ContainerJokes } from "./styles";

function Homework24() {
  // Объявляем 3 стейта jokeQuestion и jokeAnswer - для отображения данных, которые пришли
  // с бэкенда. JokeError для отображения ошибки
  const [jokeQuestion, setJokeQuestion] = useState<string | undefined>(
    undefined
  );
  const [jokeAnswer, setJokeAnswer] = useState<string | undefined>(undefined);
  const [jokeError, setJokeError] = useState<string | undefined>(undefined);

  const getJokes = async (isClickedByButton?: boolean) => {
    console.log(isClickedByButton);
    // response возвращает обьект Response, который отображает информацию о
    // ответе: status, ok, header и т.д
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    // свойстов ok показывает нам успешно или нет был выполнен запрос
    // Если ok === true, то обрабатывает успешный ответ, если нет то ошибку
    if (response.ok) {
      setJokeError(undefined);
      // метод json() помогает нам получить body из обьекта Response
      const data = await response.json();
      console.log(data);
      setJokeQuestion(data.setup);
      setJokeAnswer(data.punchline);

      if (isClickedByButton) {
        alert("Вы получили новую шутку");
      }
    } else {
      setJokeQuestion(undefined);
      setJokeAnswer(undefined);
      setJokeError("Ошибка при получении данных");

      if (isClickedByButton) {
        alert("Ошибка при получении данных");
      }
    }
  };

  // В жизненный цикл Mounting, вызваем ф-ию getJokes только один раз
  // при каждом новом создании компонента, для этого мы 2 аргументом прокидываем []
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <Homework24Wrapper>
      <Card>
        <ContainerJokes>
          {jokeQuestion && <Text>{jokeQuestion}</Text>}
          {jokeAnswer && <Text>{jokeAnswer}</Text>}
          {jokeError && <Text>{jokeError}</Text>}
        </ContainerJokes>
        <Button name="new joke" onClick={() => getJokes(true)} />
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;
