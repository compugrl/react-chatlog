import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry, index) => {
    return (
      <li className="chat-log" key={index}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          timeStamp={entry.timeStamp}
          body={entry.body}
          liked={entry.liked}
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
