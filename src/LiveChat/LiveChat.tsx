import { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./LiveChat.module.scss";

type PropsType = {
  isLiveChatOpen: boolean;
  onClose: () => void;
};

export default function LiveChat({ isLiveChatOpen, onClose }: PropsType) {
  const [inputValue, setInputValue] = useState("");
  const [stateMessages, setStateMessages] = useState<string[]>([]);

  const onSend = () => {
    const newMessages = [...stateMessages, inputValue];
    setStateMessages(newMessages);
    setInputValue("");
  };

  const handleCloseClick = () => {
    onClose();
    setStateMessages([]);
  };

  if (!isLiveChatOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.liveChat}>
      <div className={styles.header}>
        <p>Live chat</p>
        <p className={styles.closeButton} onClick={handleCloseClick}>
          X
        </p>
      </div>

      <div className={styles.messages}>
        <p className={styles.adminMessage}>Hi! How can i help you?</p>
        {stateMessages.map((message, index) => {
          return (
            <p className={styles.userMessage} key={index}>
              {message}
            </p>
          );
        })}
      </div>

      <div className={styles.footer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type your request..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <img
          onClick={onSend}
          className={styles.sendButton}
          src="https://icons-for-free.com/iconfiles/png/512/interface+multimedia+paper+airplane+plane+send+icon-1320185664126916587.png"
          alt="send"
        />
      </div>
    </div>,
    document.body
  );
}
