import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import FolderList from "./FolderList.js";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    height: "95vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "600px",
    height: "630px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
}));

function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    setMessagesArray((prev) => [...prev, messageText]);
  };

  const chatsAray = [
    {id: "1", name: "First Chat"},
    {id: "2", name: "Second Chat"},
    {id: "3", name: "Third Chat"},
];

  return (
    <div className={classes.appWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messagesArray} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
      <FolderList chatsAray={chatsAray}></FolderList>
    </div>    
  );
}

MessageList.propTypes = {
  chatsAray: PropTypes.array.isRequired,
};

export default App;
