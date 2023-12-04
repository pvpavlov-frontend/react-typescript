import { CSSProperties } from "react";

import Button from 'components/Button';

import { Lesson22Wrapper, LoginCard } from "./styles";

function Lesson22() {
  // ТИПЫ:
  // Union type
  type WordOrNumber = string | number;
  let wordOrNumber: WordOrNumber = 3;

  // Interface vs type
  interface Person {
    name: string;
    age: number;
  }

  type PersonType = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "John",
    age: 25,
    color: "White",
  };

  interface Person {
    color: string;
  }

  // Generic

  type Car<Par, Color, Name> = {
    name: Name;
    color: Color;
    params: Par;
  };

  const car: Car<number[], string, string> = {
    name: "Porshe",
    color: "Red",
    params: [2, 3, 4],
  };

  // STYLES
  // 1 cпособ стилизации: создать файл styles.css, импортировать его и добавлять калссы

  // 2 способ: inline - мы передаем обьект в атрибут тега style
  // - если 2 слова: font-size, то пишеь 2 слово вместе с первым и с загланой буквы fontSize
  // - значения пишем в строке

  // Предстваим что это пропса которая пришла от родительского компонента
  const isRed: boolean = true;

  const paragraphStyles: CSSProperties = {
    fontSize: "20px",
    color: isRed ? "rgb(255,0,0)" : "blue",
  };

  return (
    <Lesson22Wrapper>
      <p style={paragraphStyles}>Lesson 22</p>
      <LoginCard>
        <Button isRedFont={true} disabled={true} name="LogIn" onClick={() => {}} />
      </LoginCard>
    </Lesson22Wrapper>
  );
}

export default Lesson22;
