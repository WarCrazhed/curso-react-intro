import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

function AppUi({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <div className="container">
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <div className="flex-justify-between gap-1 items-center">
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <CreateTodoButton />
            </div>
            <TodoList>
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {error && <p>Desespérate, hubo un error...</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={completeTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </TodoList>
        </div>
    );
}

export { AppUi }