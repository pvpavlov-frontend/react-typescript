import { useContext } from 'react';
import { BlogContext } from 'homeworks/Homework27/components/BlogManagement/BlogManagement';

function Message() {
  // Получаем данные из контекста
  const { postData } = useContext(BlogContext);

  return (
    <div>
      <p>{postData.text}</p>
    </div>
  );
};

export default Message;
