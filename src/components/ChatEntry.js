import React, { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from '../components/TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const heartType = isLiked ? '❤️' : '🤍';
  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={toggleLiked} className="like">
          {heartType}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.number.isRequired,
  body: PropTypes.number.isRequired,
  timeStamp: PropTypes.number.isRequired,
  liked: PropTypes.string.isRequired,
};

export default ChatEntry;
