import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
        setOpenModal(false);
    };

    return (
        <form className="todo-form flex flex-col" onSubmit={onSubmit}>
            <div className="todo-form-field">

            <label className="todo-form-label">Escribe tu nuevo TODO</label>
            <textarea 
                className="todo-form-textarea"
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={(e) => setNewTodoValue(e.target.value)}
            />
            </div>
            <div className="todo-form-buttons">
                <button 
                    type="button"
                    className="btn-danger"
                    onClick={() => setOpenModal(false)}
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="btn-success"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }