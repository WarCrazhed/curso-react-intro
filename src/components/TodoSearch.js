import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext);
    
    return (
        <input 
            placeholder="Cortar cebolla" 
            className="w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
    )
}

export { TodoSearch }