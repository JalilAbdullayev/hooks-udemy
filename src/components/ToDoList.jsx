import { useEffect, useState } from "react";
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

    const [count, setCount] = useState(0);

    const addToDo = text => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text
            }
        ]);
    }

    useEffect(() => {
        console.log("Mounted", todos);
    }, []);

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
            <button onClick={() => setCount(count + 1)}>
                Score: {count}
            </button>
        </>
    );
}

export default ToDoList;