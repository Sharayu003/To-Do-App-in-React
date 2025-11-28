import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./App.css"

function App() {
  const [todoList, setTodoList] = useState([]);

  // ✅ Add Task
  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTodoList([...todoList, newTask]);
  };

  // ✅ Toggle Complete
  const toggleComplete = (id) => {
    const updatedList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodoList(updatedList);
  };

  // ✅ ✅ ✅ DELETE TASK (MUST be inside App)
  const deleteTask = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

 
  return (
  <div className="app-container">
    <h1>My To-Do App</h1>

    <TodoInput addTask={addTask} />

    <TodoList
      todoList={todoList}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />

    <p className="counter">
      Total: {todoList.length} | Completed: {todoList.filter(t => t.completed).length} | Pending: {todoList.filter(t => !t.completed).length}
    </p>
  </div>
);



}

export default App;
