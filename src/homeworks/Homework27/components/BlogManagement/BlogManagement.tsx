import React, { useState, createContext, useContext } from 'react';
import Card from 'homeworks/Homework27/components/Card/Card';

// Создаем контекст
const BlogContext = createContext<any>(null);

const BlogManagement: React.FC = () => {
  // Состояния для хранения текста и данных для карточки
  const [postText, setPostText] = useState<string>('');
  const [postData, setPostData] = useState<any>(null);

  // Обработчик клика на кнопку "Запостить"
  const handlePost = () => {
    setPostData({ text: postText, name: 'Ваше Имя', surname: 'Ваша Фамилия' });
  };

  return (
    <BlogContext.Provider value={{ postText, setPostText, postData, handlePost }}>
      <div>
        <textarea
          placeholder="Введите ваш пост..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button onClick={handlePost}>Запостить</button>
        {postData && <Card />}
      </div>
    </BlogContext.Provider>
  );
};

export { BlogManagement, BlogContext };
