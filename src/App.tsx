import { useState } from "react";
import LiveChat from "./LiveChat";
import { messages } from "./messages";
import styles from "./App.module.scss";

function App() {
  const [isLiveChatOpen, setLiveChatOpen] = useState(false);

  const showLiveChat = () => {
    setLiveChatOpen(true);
  };

  const onCloseLiveChat = () => {
    setLiveChatOpen(false);
  };

  return (
    <div className="App">
      <button className={styles.needHelpButton} onClick={showLiveChat}>
        Need help?
      </button>
      <LiveChat isLiveChatOpen={isLiveChatOpen} onClose={onCloseLiveChat} />
    </div>
  );
}

export default App;
