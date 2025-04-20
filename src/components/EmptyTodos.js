import { FaClipboardList } from "react-icons/fa6";

function EmptyTodos() {
    return (
        <div className="empty-todos">
            <FaClipboardList className="empty-icon" />
            <p className="empty-text">¡Crea tu primer TODO!</p>
            <p className="empty-description">Comienza agregando una nueva tarea</p>
        </div>
    )
}

export { EmptyTodos }