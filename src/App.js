import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState();
  const [loading, setLoading] = useState();

  const getAdvice = async () => {
    setLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const promise = await response.json();
    setAdvice(promise.slip.advice);
    setLoading(false);
  };
  console.log(advice);

  return (
    <div className="App">
      <p>{advice}</p>
      <button onClick={getAdvice}>
        {loading ? <div className="loader"></div> : "Generate Advice"}
      </button>
    </div>
  );
}

export default App;
