import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<
    Array<{
      date: string;
      temperatureC: number;
      temperatureF: number;
      summary: string;
    }>
  >();

  useEffect(() => {
    fetch("/api/weatherforecast", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log({ err }));
  }, []); // on mount only

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <main>
        {data?.map((x) => (
          <div key={x.date} className="App-list">
            <div>{x.date}</div>
            <div>{x.temperatureC}</div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
