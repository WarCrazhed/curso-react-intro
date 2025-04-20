import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);
    return (
        <button 
            className="btn font-bold"
            onClick={() => setOpenModal(true)}
        >
            +
        </button>
    );
}

export { CreateTodoButton }; 