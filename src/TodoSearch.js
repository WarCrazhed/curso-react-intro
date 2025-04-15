import { useState } from "react"

function TodoSearch() {
    const [searchValue, setSearchValue] = useState('')
    console.log('los usarios buscan todos de '+searchValue);
    
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