import React from 'react';
import Message from 'homeworks/Homework27/components/Message/Message';
import { BlogContext } from 'homeworks/Homework27/components/BlogManagement/BlogManagement';
import { CardWrapper } from './styles';

function Card() {
  // Получаем данные из контекста
  const { postData } = React.useContext(BlogContext);

  return (
    <CardWrapper>
      <div>
        <p>{`${postData.name} ${postData.surname}`}</p>
      </div>
      <Message />
    </CardWrapper>
  );
};

export default Card;
