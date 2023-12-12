import React from 'react';
import Message from 'homeworks/Homework27/components/Message/Message';
import { BlogContext } from 'homeworks/Homework27/components/BlogManagement/BlogManagement';

const Card: React.FC = () => {
  // Получаем данные из контекста
  const { postData } = React.useContext(BlogContext);

  return (
    <div>
      <div>
        <p>{`${postData.name} ${postData.surname}`}</p>
      </div>
      <Message />
    </div>
  );
};

export default Card;
