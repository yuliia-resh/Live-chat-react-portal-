import { useState } from "react";
import LiveChat from "./LiveChat";
import styles from "./App.module.scss";

function App() {
  const [isLiveChatOpen, setLiveChatOpen] = useState(false);

  const showLiveChat = () => {
    setLiveChatOpen(true);
  };

  return (
    <div className="App">
      <button className={styles.needHelpButton} onClick={showLiveChat}>
        Need help?
      </button>
      <LiveChat
        isLiveChatOpen={isLiveChatOpen}
        onClose={() => {
          setLiveChatOpen(false);
        }}
      />
    </div>
  );
}

export default App;
