import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleTyping = (e) => {
    if(e.type === "keydown"){
      socket.emit('typing', `${localStorage.getItem('userName')} is typing`);
    }
    if(e.type === "keyup"){
      socket.emit('notTyping', "");
    }

  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
          onKeyUp={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;