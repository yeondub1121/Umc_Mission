import React, { useState } from 'react';
import './todo.css';
import todolist from './todolist'; 


function TodoApp() {
    return (
        <div>
            <h1>UMC Study Plan</h1>
            <div className="input-container">
                <input
                    type="text"
                    id="todoInput"
                    placeholder="스터디 계획을 작성해보세요!"
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="title-line"></div>
            <div className="lists-container">
                <div className="todo-list">
                    <h4>해야 할 일</h4>
                    <ul id="todoList"></ul>
                </div>
                <div className="completed-list">
                    <h4>해낸 일</h4>
                    <ul id="completedList"></ul>
                </div>
            </div>
        </div>
    );
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTodo();

    }
}

function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    var li = document.createElement('li');
    li.textContent = todoText;

    var completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.onclick = function() {
        completeTask(li);
    };

    li.appendChild(completeButton);

    document.getElementById('todoList').appendChild(li);

    todoInput.value = '';
}

function completeTask(task) {
    var completedList = document.getElementById('completedList');
    var todoList = document.getElementById('todoList');

    task.removeChild(task.lastChild);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = function() {
        removeTask(task);
    };

    task.appendChild(deleteButton);

    completedList.appendChild(task);
}

function removeTask(task) {
    task.parentNode.removeChild(task);
}

export default TodoApp;