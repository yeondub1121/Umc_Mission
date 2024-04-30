import React from 'react';

function CompletedList({ completed, onRemove }) {
    return (
        <div className="completed-list">
            <h4>해낸 일</h4>
            <ul id="completedList">
                {completed.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => onRemove(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompletedList;
