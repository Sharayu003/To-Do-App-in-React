import TodoItem from "./TodoItem";

function TodoList({ todoList, toggleComplete, deleteTask }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
