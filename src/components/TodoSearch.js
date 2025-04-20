function TodoSearch({
    searchValue,
    setSearchValue
}) {
    
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