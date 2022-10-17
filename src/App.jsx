import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
// import list from "./data/list.js"; 
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import ToDo from './components/ToDo/ToDo';

const App = () => {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState("");

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark task as done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  return (
    <div className="container app">
      <br />
      <br />
      <h2>My Todos</h2>

      {
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      }

      {toDo && toDo.length ? "" : "No Tasks..."}

      <ToDo toDo={toDo} markDone={markDone} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
 