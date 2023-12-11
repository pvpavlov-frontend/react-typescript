import { useState, createContext } from "react";
import { Section } from "lessons/Lesson27/components";

import { MainWrapper } from "./styles";

interface UserData {
  userName: string;
  age: number;
  email: string;
}

// Создаем контекст
export const MainContext = createContext({
  userName: "",
  age: 0,
  email: "",
});

function Main() {
  const [userData, setUserData] = useState<UserData>({
    userName: "Igor Igorevich",
    age: 40,
    email: "example@example.com",
  });

  return (
    // Оборачиваем все в MainContext.Provider, и все что внутри него будет иметь доступ к контексту с помощью
    // useContext
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <h1>Main Component</h1>
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
