function CreateTodoButton() {
    return (
        <button 
            className="btn font-bold"
            onClick={(e) => console.log(e.target)}
        >
            +
        </button>
    );
}

export { CreateTodoButton }; 