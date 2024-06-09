import { useState } from "react";

const ToDoList = () => {
    const [todos, setTodos] = useState([{
        id: 1,
        text: "Pay bills"
    }, {
        id: 2,
        text: "Do your homework"
    }, {
        id: 3,
        text: "Feed the dog"
    }]);

    const addToDo = () => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text: "Learn Hooks"
            }
        ]);
    }

    return (
        <>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )
                })}
            </ul>
            <button onClick={addToDo}>
                Add A To Do
            </button>
        </>
    );
}

export default ToDoList;