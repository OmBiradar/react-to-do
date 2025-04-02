import TodoItem from './TodoItem'; 

function TodoList({ todos, toggleComplete, deleteTodo }) {
    if (todos.length === 0) {
        return <p className="empty-message">No tasks yet! Add one above.</p>
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;