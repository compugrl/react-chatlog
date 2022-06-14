import React from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const message = {
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {message.sender} and {message.body}
        </h1>
      </header>
      <main>
        <ChatEntry message={message}></ChatEntry>
      </main>
    </div>
  );
};

export default App;
