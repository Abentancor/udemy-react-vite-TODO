
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <div className='bg-white dark:bg-slate-800 rounded-lg  overflow-hidden'>

      {todos.map((todo) =>
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      )}

    
    </div>
  )
}

export default TodoList