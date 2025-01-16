import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      console.log("res", message);
    });
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt("이름을 입력해 주세요.");
    console.log(userName);

    socket.emit("login", userName, (res) => {
      console.log("res", res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage res", res);
    });
  };

  return (
    <div>
      <div className="App">
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
