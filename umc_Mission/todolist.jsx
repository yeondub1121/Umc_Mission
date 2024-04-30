import React from 'react';

function TodoList({ todos, onComplete }) {
    return (
        <div className="todo-list">
            <h4>해야 할 일</h4>
            <ul id="todoList">
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => onComplete(todo.id)}>완료</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
