import { useContext } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";

function AppUi() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = useContext(TodoContext);

    return (
        <div className="container">
            <TodoCounter />
            <div className="flex-justify-between gap-1 items-center">
                <TodoSearch />
                <CreateTodoButton />
            </div>
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </div>
    );
}

export { AppUi }