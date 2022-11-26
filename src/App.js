import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  function handleStart() {
    setStart(true);
  }

  useEffect(() => {
    if (start === true) {
      setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
  }, [start]);

  return (
    <header>
      <h1>welcome</h1>
      <div>{time}</div>
      <button onClick={handleStart}>Start</button>
      <button>Stop</button>
    </header>
  );
}

export default App;
