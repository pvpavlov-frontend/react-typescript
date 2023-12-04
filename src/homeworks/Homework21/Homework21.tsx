import { useState } from "react";
import "./styles.css";
import Button from "components/Button";
// import Button from '../../components/Button'
// 1 способ: импорт напрямую из файла с иконкой
// import LikeIcon from "../../assets/like.png";
// 2 способ: импорт из общего файла index.ts
import { LikeIcon, DislikeIcon } from "assets";

function Homework21() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const plusLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const plusDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div
      onClick={() => console.log("Hello world")}
      className="homework21-wrapper"
    >
      <div className="like-container">
        <img src={LikeIcon} alt="like" onClick={plusLike} />
        <p>{like > 0 && like}</p>
      </div>
      <div className="dislike-container">
        <img src={DislikeIcon} alt="dislike" onClick={plusDislike} />
        <p>{dislike > 0 && dislike}</p>
      </div>
      <div className="button-container">
        <Button name="Reset Results" type="button" onClick={resetResults} />
      </div>
    </div>
  );
}

export default Homework21;
