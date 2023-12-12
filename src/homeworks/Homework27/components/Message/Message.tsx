import React from 'react';
import { BlogContext } from 'homeworks/Homework27/components/BlogManagement/BlogManagement';

const Message: React.FC = () => {
  // Получаем данные из контекста
  const { postData } = React.useContext(BlogContext);

  return (
    <div>
      <p>{postData.text}</p>
    </div>
  );
};

export default Message;
