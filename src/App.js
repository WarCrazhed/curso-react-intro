import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALALA", completed: false },
  { text: "Sisis", completed: false },
  { text: "LA", completed: false },
];

function App() {
  return (
    <div className="container">
      <TodoCounter completed={16} total={25} />
      <div className="flex-justify-between gap-1 items-center">
      <TodoSearch />
      <CreateTodoButton />
      </div>
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
