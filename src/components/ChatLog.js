import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <li className="chat-log">
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          timestamp={entry.timestamp}
          body={entry.body}
          likes={entry.likes}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{chatEntries}</ul>
    </section>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatLog;
