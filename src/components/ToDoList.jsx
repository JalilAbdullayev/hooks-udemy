import { useState } from "react";
import AddNewToDo from "./AddNewToDo";

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

    const addToDo = text => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text
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
            <AddNewToDo addToDo={addToDo}/>
        </>
    );
}

export default ToDoList;