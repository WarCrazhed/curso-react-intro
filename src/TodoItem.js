import { FaCheck, FaXmark } from "react-icons/fa6";

function TodoItem ({ text, completed, onComplete, onDelete }) {
    return (
      <div className='list'>
        <p className={completed ? 'completed-task' : ''}>{text}</p>
        <div className="flex-justify-between">
          <button className={ completed ? 'btn-success' : 'btn-primary' }
            onClick={() => onComplete(text)}
          >
            <FaCheck />
          </button>
          <button className="btn-danger"
            onClick={() => onDelete(text)}
          >
            <FaXmark />
          </button>
        </div>
      </div>
    );
  }

  export { TodoItem }