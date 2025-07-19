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
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar os conceitos básicos de inglês",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática básica",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) 
  {
    const newTasks = tasks.map(
      (task) => 
        {
          if (task.id == taskId) 
          {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        }
      );
    setTasks(newTasks);
  }

  function onTrashClick(taskId) 
  {
    const deleteTask = tasks.filter(
      (task) =>
        {
          if (task.id == taskId) 
          {
            return false;
          }
          return true;
        }
      );
    setTasks(deleteTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}

export default App;
