//takes in the todo data and displays the task to the screen.
import React from 'react'

const Todo = props => {
    return (
        <div
            className={`todos${props.todo.completed ? "completed" : ""}`}
            onClick={() => props.toggleTodo(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo; 