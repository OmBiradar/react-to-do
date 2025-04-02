function TodoItem ({ todo, toggleComplete, deleteTodo }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-text">
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
                <span>{todo.text}</span>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;