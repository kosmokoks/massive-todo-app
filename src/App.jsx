import TodoList from "./page/list/List";
import React from "react";
import ErrorModal from "./page/error/ErrorModal";

const App = () => {
    return (
        <>
            <TodoList/>
            <ErrorModal/>
        </>
    )
}

export default App;
