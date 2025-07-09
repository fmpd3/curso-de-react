import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";
import "./index.css";

function App() {
  const [perdao, setMessage] = useState("70 x 7");

  return (
    <div className="App">
      <Tasks />
      <AddTask />
      <h1 className="logo">Quantas vezes Jesus nos perdoará?</h1>
      <p>Quantidade: {perdao}</p>
      <button onClick={() => setMessage("É só uma forma de dizer, ele te perdoará mais vezes =D")}>Revelar</button>
    </div>
  );
}

export default App;