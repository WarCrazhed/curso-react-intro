function TodoCounter({total, completed}) {
    return (
        <h1>
            {total === 0 ? 'No hay tareas' : total === completed ? `¡Felicidades! Completaste todas las ${completed} tareas` : `Has completado ${completed} de ${total} tareas`}
        </h1>
    );
}

export { TodoCounter }; 