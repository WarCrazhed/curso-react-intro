function TodoItem ({ text, completed }) {
    return (
      <div className='list'>
        <p>{text}</p>
        <div className="flex-justify-between">
          <button className="btn-success">
            V
          </button>
          <button className="btn-danger">
            X
          </button>
        </div>
      </div>
    );
  }

  export { TodoItem }