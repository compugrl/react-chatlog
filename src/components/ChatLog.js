import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry, index) => {
    return (
      <li key={index}>
        <ChatEntry
          sender={entry.sender}
          timestamp={entry.timestamp}
          body={entry.body}
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
