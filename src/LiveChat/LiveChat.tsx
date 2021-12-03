import { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./LiveChat.module.scss";

type PropsType = {
  isLiveChatOpen: boolean;
  onClose: () => void;
};

export default function LiveChat({ isLiveChatOpen, onClose }: PropsType) {
  const [message, setMessage] = useState("");

  if (!isLiveChatOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.liveChat}>
      <div className={styles.header}>
        <p>Live chat</p>
        <p className={styles.closeButton} onClick={onClose}>
          X
        </p>
      </div>
      <div className={styles.messages}>
        <p className={styles.adminMessage}>Hi! How can i help you?</p>
      </div>
      <div className={styles.footer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type your request..."
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(message);
          }}
        />
        <img
          className={styles.sendButton}
          src="https://icons-for-free.com/iconfiles/png/512/interface+multimedia+paper+airplane+plane+send+icon-1320185664126916587.png"
          alt="send"
        />
      </div>
    </div>,
    document.body
  );
}
