import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = useContext(TodoContext);

    return (
        <h1>
            {totalTodos === 0 ? 'No hay tareas' : totalTodos === completedTodos ? `¡Felicidades! Completaste todas las ${completedTodos} tareas` : `Has completado ${completedTodos} de ${totalTodos} tareas`}
        </h1>
    );
}

export { TodoCounter }; 