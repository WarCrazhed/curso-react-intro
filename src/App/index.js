import { TodoProvider } from "../context/TodoContext";
import { AppUi } from "./AppUi";

function App() {
    return (
        <TodoProvider>
            <AppUi />
        </TodoProvider>
    )
}

export default App;
