import { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";

import { messages } from "../messages";
import styles from "./LiveChat.module.scss";

type PropsType = {
  isLiveChatOpen: boolean;
  onClose: () => void;
};

export default function LiveChat({ isLiveChatOpen, onClose }: PropsType) {
  const [stateMessage, setStateMessage] = useState("");
  const [stateMessages, setStateMessages] = useState<string[]>([]);

  const onSend = () => {
    messages.push(stateMessage);
    setStateMessages(messages);
    console.log(messages, stateMessages);
  };

  const handleCloseClick = () => {
    onClose();
    messages.splice(0, messages.length);
    setStateMessages(messages);
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
            setStateMessage(e.target.value);
          }}
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
