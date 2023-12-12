import React, { useState, createContext } from 'react';
import Card from 'homeworks/Homework27/components/Card/Card';
import { BlogManagementWrapper } from './styles';

// Создаем контекст
const BlogContext = createContext<any>(null);

function BlogManagement(){
  // Состояния для хранения текста и данных для карточки
  const [postText, setPostText] = useState<string>('');
  const [postData, setPostData] = useState<any>(null);

  // Обработчик клика на кнопку "Запостить"
  const handlePost = () => {
    setPostData({ text: postText, name: 'Ваше Имя', surname: 'Ваша Фамилия' });
  };

  return (
    <BlogContext.Provider value={{ postText, setPostText, postData, handlePost }}>
      <BlogManagementWrapper>
        <textarea
          placeholder="Введите ваш пост..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button onClick={handlePost}>Запостить</button>
        {postData && <Card />}
      </BlogManagementWrapper>
    </BlogContext.Provider>
  );
};

export { BlogManagement, BlogContext };
