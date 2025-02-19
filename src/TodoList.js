import './TodoList.css'

function TodoList({ children }) {
    return (
        <div className='row'>
            {children}
        </div>
    )
}

export { TodoList }