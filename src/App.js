import { useState } from "react";
import "./App.css";
import Calendar from "./Calendar/Calendar";

function App() {
  const [enterDate, setEnterDate] = useState(new Date());
  const [showDate, setShowDate] = useState(new Date());
  return (
    <div className="App">
      <div className="input-submit">
        <input onChange={(e) => setEnterDate(e.target.value)} />
        <button onClick={() => setShowDate(enterDate)}>Submit</button>
        <p>
          Enter date in YYYY-MM-DD (Year-Month-Day) format (Ex: 2023-03-15 or
          2023/03/15)
        </p>
      </div>
      <Calendar date={showDate} />
    </div>
  );
}

export default App;
