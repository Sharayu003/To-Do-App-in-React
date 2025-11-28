function TodoItem({ item, toggleComplete, deleteTask }) {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
        />

        <span
          className={item.completed ? "completed" : ""}
        >
          {item.title}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(item.id)}
      >
        ❌ Delete
      </button>
    </li>
  );
}

export default TodoItem;
