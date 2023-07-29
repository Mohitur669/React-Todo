import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            <p onClick={() =>
                toggleComplete(task.id)}
                className={`${task.completed ? "completed" : ""}`}
            >{task.task}</p>

            <div>
                <FontAwesomeIcon icon={faCheck} onClick={() => toggleComplete(task.id)} />
                <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo;