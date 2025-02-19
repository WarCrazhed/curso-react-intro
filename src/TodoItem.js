import './TodoItem.css'

function TodoItem ({ text, completed }) {
    return (
      <div className='list'>
        <span>V</span>
        <p>{text}</p>
        <span>X</span>
      </div>
    );
  }

  export { TodoItem }