import React from 'react';

const Message = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`} dangerouslySetInnerHTML={{ __html: message }}>
    </div>
  );
};

export default Message;
