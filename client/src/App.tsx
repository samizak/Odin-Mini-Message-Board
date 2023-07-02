import { useEffect, useState } from "react";
import MessageForm from "./components/MessageForm";
import messageObject from "./components/MessageObject";
import Message from "./components/Message/Message";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState<messageObject[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        let arr: messageObject[] = [];
        data.allMessages.map((e: any) => {
          arr.push(new messageObject(e.name, e.message, new Date(e.datePosted)));
        });

        setMessageList(arr);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="main-header">Mini Message Board</h1>

      {MessageForm({ messageList, setMessageList })}

      <div className="main-content">
        <p className="message-counter">{messageList.length + " messages"}</p>
        <div className="message-list">
          {messageList.map((messageObject: messageObject, index: number) =>
            Message({ messageObject: messageObject, index: index, messageCount: messageList.length })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
