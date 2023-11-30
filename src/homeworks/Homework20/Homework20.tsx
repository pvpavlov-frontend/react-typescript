import "./styles.css";

function Homework20() {
  // Создаем переменные и присваиваем им тип
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"];

  // Тут делаем map нашего массива programLangs и возвращаем JSX элементы
  // c данными из массива
  // 1. Кто-то может удалить тип к programLangs и тогда если вы далле не правильно
  //   используете programLangs, у вас будет ошибка
  // 2. Это упрощает дебаг(ловля ошибка)
  // 3. На проектах прописывются жесткие правила с помощью eslint
  // что аргументы обязанны быть протипизированны
  // 4. становится очевиднее что за тип
  // 5. Минимизирует риск ошибок
  // 6. Типизируем, когда знаем что должно прийти с бэка, однако
  // бэкенд разработчик может накосячить и прислать вам не то что ожидается
  // и вы тогда с легкостью словите ошибку

  const newProgramLangs = programLangs.map((el: string) => {
    return <p key={`langs-${Math.random()}`}>{el}</p>;
  });

  return (
    <div className="homework20-wrapper">
      <p className="company-personal">Homework 20</p>
      <p className="company-personal">{firstName}</p>
      <p className="company-personal">{lastName}</p>
      <p className="company-personal">{job}</p>
      <p className="company-personal">
        {isManager ? "Manager" : "Simple Employee"}
      </p>
      <p className="company-personal">{experience}</p>
      <p className="company-personal">{email}</p>
      {newProgramLangs}
    </div>
  );
}

export default Homework20;
