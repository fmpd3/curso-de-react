import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar os conceitos básicos de React",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar os conceitos básicos de inglês",
      completed: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática básica",
      completed: false,
    }
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;