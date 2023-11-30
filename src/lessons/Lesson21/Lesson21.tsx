import { useState } from "react";

import Counter from "../../components/Counter";

import "./styles.css";

function Lesson21() {
  // Создаем useState для управления состоянием счетчика
  const [count, setCount] = useState<number>(0);

  // Создаем функцию onPlus
  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1);
  };

  // Создаем функцию onMinus
  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1);
  };

  // 1. null и undefined
  let emptyContainer: null = null;
  let undefContainer: undefined = undefined;

  // 2. тип tupel - позволяет нам зранить массив фиксированной длинны с разными типа данных в нем
  let tupelArray: [string, number, string] = ["Tiger", 3, "Lion"];

  // 3. тип void - когда функия у нас ничего не возвращает, просто что-то выполняет
  function helloWorld(): void {
    console.log("hello world");
  }

  const sayHi = (): void => {
    console.log("Hi");
  };

  // 4. типизация ф-ий которые что-то возвращают + типизация аргументов - обязательно
  //   const sum: (a: number, b: number) => number = (a: number, b: number) => {
  //     return a + b;
  //   };

  const sum = (a: number, b: number): number => {
    return a + b;
  };

  // 5. Тип any - когда типизация не строгая и мы не знаем что-там может лежать
  let anyType: any = 3;

  anyType = "3";
  anyType = () => console.log("Any function");

  // 6. enum - тип переисляемых констант

  enum SEASONS {
    WINTER = "Winter",
    SPRING = "Spring",
    SUMMER = "Summer",
    AUTUMN = "Autumn",
    QWE = 3,
  }

  let spring = SEASONS.SPRING;

  // Сравнение 2 строк и их символов
  console.log(SEASONS.SUMMER === "Summer");
  console.log(spring);

  // 7. Типизация обьектов

  interface Persons {
    pets: string[];
  }

  interface Persons2 {
    someInfo?: string;
  }

  interface Person extends Persons, Persons2 {
    name: string;
    lastName: string;
    age: number;
    hairColor: string;
    // ? - обозначает что свойство не обязательное
    isMarried?: boolean;
  }

  const person: Person = {
    name: "Josh",
    lastName: "Smith",
    age: 35,
    hairColor: "Black",
    pets: ["Tiger"],
  };

  // 8. Несколько типов одной переменной
  let some: string | undefined = undefined;

  some = "Hello";

  return (
    <div className="lesson21-wrapper">
      <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
}

export default Lesson21;
