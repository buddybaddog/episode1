import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
          // setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {<h1 style={{color: textColor}}> Hi my name is Pedro</h1>}
    </div>
  );
}

export default App;
