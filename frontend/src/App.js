import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api";

function App(props) {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      console.log(msg)
      setChatHistory((oldArray) => [...oldArray, msg]);
      console.log(chatHistory);
    });
  }, [chatHistory]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <>
      <div className="App">
        <Header></Header>
        <ChatHistory chatHistory={chatHistory}></ChatHistory>
        <ChatInput send={send}></ChatInput>
      </div>
    </>
  );
}

export default App;
