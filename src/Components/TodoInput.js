import { useState } from "react";

function TodoInput(props) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    props.addTask(task);
    setTask("");
    alert("Task added successfully!");   // ✅ Fixed typo
  };

  return (
    <div className="input-box">
  <input
    type="text"
    placeholder="Enter your task"
    value={task}
    onChange={(e) => setTask(e.target.value)}
  />
  <button onClick={handleAdd}>Add</button>
</div>

  );
}

export default TodoInput;
